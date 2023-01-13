package com.leonardo.task_creator.dto;

import com.leonardo.task_creator.model.Status;
import lombok.Data;

@Data
public class StatusDTO {

    private Long id;

    private String titulo;

    private String descricao;

    public StatusDTO() {
    }

    public StatusDTO(Status status) {
        this.id = status.getId();
        this.titulo = status.getTitulo();
        this.descricao = status.getDescricao();
    }
}
