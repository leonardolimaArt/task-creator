package com.leonardo.task_creator.dto;

import com.leonardo.task_creator.model.Categoria;
import lombok.Data;

@Data
public class CategoriaDTO {

    private Long id;

    private String titulo;

    private String descricao;

    public CategoriaDTO() {
    }

    public CategoriaDTO(Categoria categoria) {
        this.id = categoria.getId();
        this.titulo = categoria.getTitulo();
        this.descricao = categoria.getDescricao();
    }
}
