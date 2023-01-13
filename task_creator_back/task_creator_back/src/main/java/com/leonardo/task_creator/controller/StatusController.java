package com.leonardo.task_creator.controller;

import com.leonardo.task_creator.dto.StatusDTO;
import com.leonardo.task_creator.dto.StatusInputDTO;
import com.leonardo.task_creator.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("status")
public class StatusController {

    @Autowired
    private StatusService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StatusDTO inserir(@Valid @RequestBody StatusInputDTO inputDto) {
        return service.save(inputDto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<StatusDTO> Listar() {
        return service.listar();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<StatusDTO> buscar(@PathVariable Long id) {
        return service.buscar(id);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }

    @PutMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public StatusDTO atualizar(@PathVariable Long id,
                               @Valid @RequestBody StatusInputDTO inputDto) {
        return service.atualizar(id, inputDto);
    }
}
