package com.leonardo.task_creator.exceptionhandler.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.client.HttpStatusCodeException;

public class HttpException extends HttpStatusCodeException {

    private static final long serialVersionUID = 1L;

    public HttpException( String message, HttpStatus status) {
        super(status, message);
    }

    public HttpException(String message) {
        super(HttpStatus.BAD_REQUEST, message);
    }
}
