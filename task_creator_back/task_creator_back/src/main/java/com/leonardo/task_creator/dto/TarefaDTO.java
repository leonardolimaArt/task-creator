package com.leonardo.task_creator.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.leonardo.task_creator.model.Tarefa;
import lombok.Data;

import java.time.LocalDate;

@Data
public class TarefaDTO {

    private Long id;

    private String titulo;

    private String descricao;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dtConclusao;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dtPrevista;

    private CategoriaDTO categoria;

    private StatusDTO status;

    public TarefaDTO() {
    }

    public TarefaDTO(Tarefa tarefa) {
        this.id = tarefa.getId();
        this.titulo = tarefa.getTitulo();
        this.descricao = tarefa.getDescricao();
        this.dtConclusao = tarefa.getDtConclusao();
        this.dtPrevista = tarefa.getDtPrevista();
        this.categoria = new CategoriaDTO(tarefa.getCategoria());
        this.status = new StatusDTO(tarefa.getStatus());
    }

}
