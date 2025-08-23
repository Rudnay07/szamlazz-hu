package com.szamlazz.demo.szamlazz_be.user;

import com.szamlazz.demo.szamlazz_be.user.ProfessionEnum;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;


public final class UserDto {
    private UserDto() {}


    public record Request(

            @Size(min = 2, max = 64)
            String lastname,


            @Size(min = 2, max = 64)
            String firstname,

            @Size(max = 128)
            String address,

            @Size(max = 128)
            String telephone,

            @NotNull
            boolean active,

            ProfessionEnum job
    ) {}


    public record Response(
            Long id,
            String lastname,
            String firstname,
            String address,
            String telephone,
            boolean active,
            ProfessionEnum job
    ) {}
}