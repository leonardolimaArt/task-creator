package com.leonardo.task_creator.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
public class StatusInputDTO {

    @NotBlank
    @Size(max = 255)
    private String titulo;

    @NotBlank
    private String descricao;

    public StatusInputDTO() {
    }
}
