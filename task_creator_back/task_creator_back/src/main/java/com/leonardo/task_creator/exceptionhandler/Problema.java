package com.leonardo.task_creator.exceptionhandler;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;
import java.util.List;


@JsonInclude(JsonInclude.Include.NON_NULL)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Problema {

    private Integer status;
    private OffsetDateTime dataHora;
    private String titulo;
    private List<Campo> campos;

    @Data
    public static class Campo {
        private String nome;
        private String mensagem;

        public Campo(String nome, String mensagem) {
            super();
            this.nome = nome;
            this.mensagem = mensagem;
        }
    }

}
