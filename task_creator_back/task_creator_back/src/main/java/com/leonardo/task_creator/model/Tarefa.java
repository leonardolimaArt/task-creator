package com.leonardo.task_creator.model;

import com.leonardo.task_creator.dto.TarefaInputDTO;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tarefa", schema = "task_creator_db")
@Data
public class Tarefa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "referencia")
    private Long id;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descricao")
    private String descricao;

    @Column(name = "dt_conclusao")
    private LocalDate dtConclusao;

    @Column(name = "dt_prevista")
    private LocalDate dtPrevista;

    @JoinColumn(name = "categoria")
    @ManyToOne
    private Categoria categoria;

    @JoinColumn(name = "status")
    @ManyToOne
    private Status status;

    public Tarefa() {
    }

    public Tarefa(TarefaInputDTO inputDto, Categoria categoria, Status status) {
        this.titulo = inputDto.getTitulo();
        this.descricao = inputDto.getDescricao();
        this.dtConclusao = inputDto.getDtConclusao();
        this.dtPrevista = inputDto.getDtPrevista();
        this.categoria = categoria;
        this.status = status;
    }
}
