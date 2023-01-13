package com.leonardo.task_creator.model;

import com.leonardo.task_creator.dto.CategoriaInputDTO;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "categoria", schema = "task_creator_db")
@Data
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descricao")
    private String descricao;

    public Categoria() {
    }

    public Categoria(CategoriaInputDTO inputDto) {
        this.titulo = inputDto.getTitulo();
        this.descricao = inputDto.getDescricao();
    }
}
