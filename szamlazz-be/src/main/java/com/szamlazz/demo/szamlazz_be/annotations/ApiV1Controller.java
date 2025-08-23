package com.szamlazz.demo.szamlazz_be.annotations;


import org.springframework.core.annotation.AliasFor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;


@Target(ElementType.TYPE) // Ezt az annotációt csak osztályokra (TYPE) tehetjük
@Retention(RetentionPolicy.RUNTIME) // Spring-nek futásidőben is látnia kell
@RestController // Minden ilyen osztály automatikusan egy REST controller lesz
@RequestMapping ("/api/v1")// Ez az alap annotáció, aminek az értékét felülírjuk
public @interface ApiV1Controller {

    @AliasFor(annotation = RequestMapping.class)
    String[] value() default {};
}