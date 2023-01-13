package com.leonardo.task_creator.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
public class TarefaInputDTO {

    @NotBlank
    private String titulo;

    @NotBlank
    private String descricao;

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dtConclusao;

    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dtPrevista;

    @NotNull
    private Long idCategoria;

    @NotNull
    private Long idStatus;

    public TarefaInputDTO() {
    }
}
