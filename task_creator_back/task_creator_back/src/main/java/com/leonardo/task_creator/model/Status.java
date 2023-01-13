package com.leonardo.task_creator.model;

import com.leonardo.task_creator.dto.StatusInputDTO;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "status", schema = "task_creator_db")
@Data
public class Status {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descricao")
    private String descricao;

    public Status() {
    }

    public Status(StatusInputDTO inputDto) {
        this.descricao = inputDto.getDescricao();
        this.titulo = inputDto.getTitulo();
    }
}
