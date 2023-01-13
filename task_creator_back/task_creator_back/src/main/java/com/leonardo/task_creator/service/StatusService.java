package com.leonardo.task_creator.service;

import com.leonardo.task_creator.dto.StatusDTO;
import com.leonardo.task_creator.dto.StatusInputDTO;
import com.leonardo.task_creator.exceptionhandler.exception.EntidadeNaoEncontradaException;
import com.leonardo.task_creator.model.Status;
import com.leonardo.task_creator.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StatusService {

    @Autowired
    private StatusRepository repository;

    public StatusDTO save(StatusInputDTO inputDto) {
        Status status = new Status(inputDto);
        status = repository.save(status);
        return new StatusDTO(status);
    }

    public ResponseEntity<StatusDTO> buscar(Long id) {
        Status status = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Status não encontrado"));
        StatusDTO dto = new StatusDTO(status);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    public List<StatusDTO> listar() {
        return repository.findAll()
                .stream()
                .map(StatusDTO::new)
                .collect(Collectors.toList());
    }

    public void deletar(Long id) {
        Status status = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Status não encontrado"));
        repository.delete(status);
    }

    public StatusDTO atualizar(Long id, StatusInputDTO inputDto) {
        Status status = repository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException("Status não encontrado"));

        status.setDescricao(inputDto.getDescricao());
        status.setTitulo(inputDto.getTitulo());

        status = repository.save(status);

        return new StatusDTO(status);
    }
}
