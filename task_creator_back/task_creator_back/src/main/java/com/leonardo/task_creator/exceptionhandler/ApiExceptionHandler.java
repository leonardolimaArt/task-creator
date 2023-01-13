package com.leonardo.task_creator.exceptionhandler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.leonardo.task_creator.exceptionhandler.exception.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.OffsetDateTime;
import java.util.ArrayList;

@ControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {

    @Autowired
    private MessageSource messageSource;

    @ExceptionHandler(EntidadeNaoEncontradaException.class)
    public ResponseEntity<Object> handlerEntidadeNaoEncontrada(EntidadeNaoEncontradaException ex, WebRequest request) {
        var status = HttpStatus.NOT_FOUND;

        var problema = new Problema();
        problema.setStatus(status.value());
        problema.setTitulo(ex.getMessage());
        problema.setDataHora(OffsetDateTime.now().withNano(0));

        return super.handleExceptionInternal(ex, problema, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(NegocioException.class)
    public ResponseEntity<Object> handlerNegocio(NegocioException ex, WebRequest request) {
        var status = HttpStatus.BAD_REQUEST;

        var problema = new Problema();
        problema.setStatus(status.value());
        problema.setTitulo(ex.getMessage());
        problema.setDataHora(OffsetDateTime.now().withNano(0));

        return super.handleExceptionInternal(ex, problema, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(HttpException.class)
    public ResponseEntity<Object> handlerNegocio(HttpException ex, WebRequest request) {
        var status = ex.getStatusCode();

        var problema = new Problema();
        problema.setStatus(status.value());
        problema.setTitulo(ex.getMessage());
        problema.setDataHora(OffsetDateTime.now().withNano(0));

        return super.handleExceptionInternal(ex, problema, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(ConflitoException.class)
    public ResponseEntity<Object> handlerConflito(ConflitoException ex, WebRequest request) {
        var status = HttpStatus.CONFLICT;

        var problema = new Problema();
        problema.setStatus(status.value());
        problema.setTitulo(ex.getMessage());
        problema.setDataHora(OffsetDateTime.now().withNano(0));

        return super.handleExceptionInternal(ex, problema, new HttpHeaders(), status, request);
    }

    @ExceptionHandler(ErroInternoException.class)
    public ResponseEntity<Object> handlerErroInternoException(ErroInternoException ex, WebRequest request) {
        var status = HttpStatus.INTERNAL_SERVER_ERROR;

        var problema = new Problema();
        problema.setStatus(status.value());
        problema.setTitulo(ex.getMessage());
        problema.setDataHora(OffsetDateTime.now().withNano(0));

        return super.handleExceptionInternal(ex, problema, new HttpHeaders(), status, request);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {

        var campos = new ArrayList<Problema.Campo>();

        for (ObjectError error : ex.getBindingResult().getAllErrors()) {

            String nome = ((FieldError) error).getField();
            String mensagem = messageSource.getMessage(error, LocaleContextHolder.getLocale());

            campos.add(new Problema.Campo(nome, mensagem));
        }

        var problema = new Problema();
        problema.setStatus(status.value());
        problema.setTitulo("Um ou mais campos estão inválidos. "
                + "Faça o preenchimento correto e tente novamente");
        problema.setDataHora(OffsetDateTime.now().withNano(0));
        problema.setCampos(campos);

        return super.handleExceptionInternal(ex, problema, headers, status, request);
    }
}
