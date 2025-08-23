package com.szamlazz.demo.szamlazz_be.user;

import org.springframework.stereotype.Component;

@Component
public class UserMapper {


    public UserDto.Response toResponseDto(User user) {
        return new UserDto.Response(
                user.getId(),
                user.getLastname(),
                user.getFirstname(),
                user.getAddress(),
                user.getTelephone(),
                user.isActive(),
                user.getJob()
        );
    }


    public User toEntity(UserDto.Request dto) {
        User user = new User();

        user.setLastname(dto.lastname());
        user.setFirstname(dto.firstname());
        user.setAddress(dto.address());
        user.setTelephone(dto.telephone());
        user.setActive(dto.active());
        user.setJob(dto.job());
        return user;
    }


    public void updateEntityFromDto(UserDto.Request dto, User user) {
        user.setLastname(dto.lastname());
        user.setFirstname(dto.firstname());
        user.setAddress(dto.address());
        user.setTelephone(dto.telephone());
        user.setActive(dto.active());
        user.setJob(dto.job());
    }
}