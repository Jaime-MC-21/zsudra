package com.zsudra.zsudra_backend.controller;



import com.zsudra.zsudra_backend.model.User;
import com.zsudra.zsudra_backend.service.UserService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }

    @PutMapping("/me")
    public ResponseEntity<User> updateUser(
            @AuthenticationPrincipal User user,
            @RequestBody @Valid UpdateUserRequest request
    ) {
        User updatedUser = userService.updateUser(
                user.getId(),
                request.getEmail(),
                request.getFullName(),
                request.getNewPassword()
        );
        return ResponseEntity.ok(updatedUser);
    }

    @Data
    private static class UpdateUserRequest {
        @Email @NotBlank private String email;
        @NotBlank private String fullName;
        private String newPassword;
    }
}