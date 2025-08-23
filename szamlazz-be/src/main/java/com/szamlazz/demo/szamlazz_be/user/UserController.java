package com.szamlazz.demo.szamlazz_be.user;

import com.szamlazz.demo.szamlazz_be.annotations.ApiV1;
import com.szamlazz.demo.szamlazz_be.exception.UserNotFoundException;
import com.szamlazz.demo.szamlazz_be.response.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ApiV1
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse<Page<UserDto.Response>>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        Page<UserDto.Response> users = userService.findAllUsers(page, size);
        return ResponseEntity.ok(ApiResponse.success("User found.", users));
    }


    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserDto.Response>> getUserById(@PathVariable Long id) {
        UserDto.Response user = userService.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with id: " + id));
        return ResponseEntity.ok(ApiResponse.success("User found.", user));

    }

    @PostMapping
    public ResponseEntity<ApiResponse<UserDto.Response>> createUser(@Valid @RequestBody UserDto.Request requestDto) {
        UserDto.Response createdUser = userService.createUser(requestDto);
        return new ResponseEntity<>(ApiResponse.success("User created successfully.", createdUser), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<UserDto.Response>> updateUser(@PathVariable Long id, @Valid @RequestBody UserDto.Request requestDto) {
        UserDto.Response updatedUser = userService.updateUser(id, requestDto);
        return ResponseEntity.ok(ApiResponse.success("User updated successfully.", updatedUser));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Object>> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.ok(ApiResponse.success("User deleted successfully."));
    }

}
