package com.leonardo.task_creator.controller;

import com.leonardo.task_creator.dto.TarefaDTO;
import com.leonardo.task_creator.dto.TarefaInputDTO;
import com.leonardo.task_creator.service.TarefaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("tarefa")
public class TarefaController {

    @Autowired
    private TarefaService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TarefaDTO inserir(@Valid @RequestBody TarefaInputDTO inputDto) {
        return service.save(inputDto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<TarefaDTO> Listar() {
        return service.listar();
    }

    @GetMapping(path = "/categoria/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<TarefaDTO> ListarCategoria(@PathVariable String id) {
        return service.listarCategoria(id);
    }

    @GetMapping(path = "/status/{id}")
    @ResponseStatus(HttpStatus.OK)
    public List<TarefaDTO> ListarStatus(@PathVariable String id) {
        return service.listarStatus(id);
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<TarefaDTO> buscar(@PathVariable Long id) {
        return service.buscar(id);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }

    @PutMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public TarefaDTO atualizar(@PathVariable Long id,
                               @Valid @RequestBody TarefaInputDTO inputDto) {
        return service.atualizar(id, inputDto);
    }
}
