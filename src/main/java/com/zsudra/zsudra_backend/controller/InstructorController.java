package com.zsudra.zsudra_backend.controller;

import com.zsudra.zsudra_backend.model.User;

import com.zsudra.zsudra_backend.model.InstructorApplication;
import com.zsudra.zsudra_backend.service.InstructorService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@RestController
@RequestMapping("/api/instructors")
@RequiredArgsConstructor
public class InstructorController {
    private final InstructorService instructorService;

    @PostMapping("/apply")
    public ResponseEntity<InstructorApplication> applyAsInstructor(
            @RequestBody @Valid InstructorApplicationRequest request
    ) {
        return ResponseEntity.ok(instructorService.submitApplication(
                request.getName(),
                request.getEmail(),
                request.getExperience()
        ));
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/applications/{id}/approve")
    public ResponseEntity<User> approveApplication(@PathVariable Long id) {
        return ResponseEntity.ok(instructorService.approveApplication(id));
    }


    @Data
    private static class InstructorApplicationRequest {
        @NotBlank private String name;
        @Email @NotBlank private String email;
        @NotBlank private String experience;
    }
}
