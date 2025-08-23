package com.szamlazz.demo.szamlazz_be.user;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @NotBlank(message = "Last name is required")
    @Size(min = 2, max = 64, message = "Last name must be between 2 and 64 characters")
    private String lastname;

    @NotBlank(message = "First name is required")
    @Size(min = 2, max = 64, message = "First name must be between 2 and 64 characters")
    private String firstname;

    @Size(max = 128, message = "Address can be at most 128 characters")
    private String address;

    @Size(max = 128, message = "Telephone number can be at most 128 characters")
    private String telephone;

    @NotNull
    private boolean active;

    public Long getId() {
        return id;
    }

    @Enumerated(EnumType.STRING)
    private ProfessionEnum job;
}