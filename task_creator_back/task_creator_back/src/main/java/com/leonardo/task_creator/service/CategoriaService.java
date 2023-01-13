package com.leonardo.task_creator.service;

import com.leonardo.task_creator.dto.CategoriaDTO;
import com.leonardo.task_creator.dto.CategoriaInputDTO;
import com.leonardo.task_creator.exceptionhandler.exception.EntidadeNaoEncontradaException;
import com.leonardo.task_creator.model.Categoria;
import com.leonardo.task_creator.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository repository;

    public CategoriaDTO save(CategoriaInputDTO inputDto) {
        Categoria categoria = new Categoria(inputDto);
        categoria = repository.save(categoria);
        return new CategoriaDTO(categoria);
    }

    public ResponseEntity<CategoriaDTO> buscar(Long id) {
        Categoria categoria = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Categoria não encontrado"));
        CategoriaDTO dto = new CategoriaDTO(categoria);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    public List<CategoriaDTO> listar() {
        return repository.findAll()
                .stream()
                .map(CategoriaDTO::new)
                .collect(Collectors.toList());
    }

    public void deletar(Long id) {
        Categoria status = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Categoria não encontrado"));
        repository.delete(status);
    }

    public CategoriaDTO atualizar(Long id, CategoriaInputDTO inputDto) {
        Categoria categoria = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Categoria não encontrado"));

        categoria.setDescricao(inputDto.getDescricao());
        categoria.setTitulo(inputDto.getTitulo());

        categoria = repository.save(categoria);

        return new CategoriaDTO(categoria);
    }
}
