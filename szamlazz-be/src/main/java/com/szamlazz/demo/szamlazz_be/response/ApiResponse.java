package com.szamlazz.demo.szamlazz_be.response;

import lombok.Data;

@Data
public class ApiResponse<T> {

    private String status;
    private String message;
    private T data;


    private ApiResponse(String status, String message, T data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }


    public static <T> ApiResponse<T> success(String message, T data) {
        return new ApiResponse<>("success", message, data);
    }


    public static <T> ApiResponse<T> success(String message) {
        return new ApiResponse<>("success", message, null);
    }


    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>("error", message, null);
    }


    public static <T> ApiResponse<T> error(String message, T data) {
        return new ApiResponse<>("error", message, data);
    }
}