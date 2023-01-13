package com.leonardo.task_creator.controller;


import com.leonardo.task_creator.dto.CategoriaDTO;
import com.leonardo.task_creator.dto.CategoriaInputDTO;
import com.leonardo.task_creator.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("categoria")
public class CategoriaController {

    @Autowired
    private CategoriaService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoriaDTO inserir(@Valid @RequestBody CategoriaInputDTO inputDto) {
        return service.save(inputDto);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<CategoriaDTO> Listar() {
        return service.listar();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<CategoriaDTO> buscar(@PathVariable Long id) {
        return service.buscar(id);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }

    @PutMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public CategoriaDTO atualizar(@PathVariable Long id,
                                  @Valid @RequestBody CategoriaInputDTO inputDto) {
        return service.atualizar(id, inputDto);
    }
}
