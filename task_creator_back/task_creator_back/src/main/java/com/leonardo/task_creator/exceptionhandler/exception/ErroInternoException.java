package com.leonardo.task_creator.exceptionhandler.exception;

public class ErroInternoException extends NegocioException {

    private static final long serialVersionUID = 1L;

    public ErroInternoException(String message) {
        super(message);
    }

}
