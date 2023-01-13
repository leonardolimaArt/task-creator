package com.leonardo.task_creator.service;

import com.leonardo.task_creator.dto.TarefaDTO;
import com.leonardo.task_creator.dto.TarefaInputDTO;
import com.leonardo.task_creator.exceptionhandler.exception.EntidadeNaoEncontradaException;
import com.leonardo.task_creator.model.Categoria;
import com.leonardo.task_creator.model.Status;
import com.leonardo.task_creator.model.Tarefa;
import com.leonardo.task_creator.repository.CategoriaRepository;
import com.leonardo.task_creator.repository.StatusRepository;
import com.leonardo.task_creator.repository.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TarefaService {

    @Autowired
    private TarefaRepository repository;

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Autowired
    private StatusRepository statusRepository;

    public TarefaDTO save(TarefaInputDTO inputDto) {
        Categoria categoria = categoriaRepository.findById(inputDto.getIdCategoria())
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Categoria não encontrado"));

        Status status = statusRepository.findById(inputDto.getIdStatus())
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Status não encontrado"));

        Tarefa tarefa = new Tarefa(inputDto, categoria, status);

        tarefa = repository.save(tarefa);

        return new TarefaDTO(tarefa);
    }

    public List<TarefaDTO> listar() {

        List<Tarefa> tarefas = new ArrayList<>();
        tarefas = repository.findAllByOrderById();

        return tarefas.stream()
                .map(TarefaDTO::new)
                .collect(Collectors.toList());
    }

    public List<TarefaDTO> listarCategoria(String categoriaId) {
        Long idCategoria = Long.parseLong(categoriaId);

        if (!categoriaId.equalsIgnoreCase("0")) {
            categoriaRepository.findById(idCategoria)
                    .orElseThrow(() -> new EntidadeNaoEncontradaException("Categoria não encontrado"));
        }

        List<Tarefa> tarefas = new ArrayList<>();

        tarefas = repository.findWithCategoriaFilter(idCategoria);

        return tarefas.stream()
                .map(TarefaDTO::new)
                .collect(Collectors.toList());
    }
    public List<TarefaDTO> listarStatus(String statusId) {
        Long idStatus = Long.parseLong(statusId);

        if (!statusId.equalsIgnoreCase("0")) {
            statusRepository.findById(idStatus)
                    .orElseThrow(() -> new EntidadeNaoEncontradaException("Categoria não encontrado"));
        }

        List<Tarefa> tarefas = new ArrayList<>();

        tarefas = repository.findWithStatusFilter(idStatus);

        return tarefas.stream()
                .map(TarefaDTO::new)
                .collect(Collectors.toList());
    }


    public ResponseEntity<TarefaDTO> buscar(Long id) {
        Tarefa tarefa = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Tarefa não encontrada"));

        return new ResponseEntity<>(new TarefaDTO(tarefa), HttpStatus.OK);
    }

    public void deletar(Long id) {
        Tarefa tarefa = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Tarefa não encontrada"));
        repository.delete(tarefa);
    }

    public TarefaDTO atualizar(Long id, TarefaInputDTO inputDto) {
        Tarefa tarefa = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Tarefa não encontrada"));

        Categoria categoria = categoriaRepository.findById(inputDto.getIdCategoria())
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Categoria não encontrado"));

        Status status = statusRepository.findById(inputDto.getIdStatus())
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Status não encontrado"));

        tarefa.setTitulo(inputDto.getTitulo());
        tarefa.setDescricao(inputDto.getDescricao());
        tarefa.setDtPrevista(inputDto.getDtPrevista());
        tarefa.setDtConclusao(inputDto.getDtConclusao());
        tarefa.setCategoria(categoria);
        tarefa.setStatus(status);

        tarefa = repository.save(tarefa);

        return new TarefaDTO(tarefa);
    }
}
