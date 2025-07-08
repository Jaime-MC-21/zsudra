package com.zsudra.zsudra_backend.controller;

import com.zsudra.zsudra_backend.dto.CreateCourseRequest;
import com.zsudra.zsudra_backend.dto.PublicCourseDTO;
import com.zsudra.zsudra_backend.model.*;
import com.zsudra.zsudra_backend.security.CustomUserDetails;
import com.zsudra.zsudra_backend.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
public class CourseController {

    private final CourseService courseService;

    @GetMapping
    public ResponseEntity<List<PublicCourseDTO>> getAllCourses() {
        List<Course> courses = courseService.getAllCourses();
        List<PublicCourseDTO> dtos = courses.stream()
                .map(courseService::mapToPublicCourseDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }


    @GetMapping("/{id}")
    public ResponseEntity<PublicCourseDTO> getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id)
                .map(courseService::mapToPublicCourseDTO)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public ResponseEntity<Course> createCourse(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @RequestBody CreateCourseRequest request
    ) {
        User instructor = userDetails.getUser();
        if (instructor.getRole() != User.UserRole.INSTRUCTOR) {
            throw new IllegalArgumentException("Solo los instructores pueden crear cursos.");
        }
        Course created = courseService.createCourse(request, instructor);
        return ResponseEntity.ok(created);
    }

    @PostMapping("/{id}/purchase")
    public ResponseEntity<Purchase> purchaseCourse(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @PathVariable Long id
    ) {
        User user = userDetails.getUser();
        Course course = courseService.getCourseById(id)
                .orElseThrow(() -> new IllegalArgumentException("Curso no encontrado"));

        return ResponseEntity.ok(courseService.purchaseCourse(user, course));
    }

    @GetMapping("/my-courses")
    public ResponseEntity<List<PublicCourseDTO>> getMyCourses(
            @AuthenticationPrincipal CustomUserDetails userDetails
    ) {
        User user = userDetails.getUser();
        List<Course> courses = courseService.getPurchasedCourses(user);
        List<PublicCourseDTO> dtos = courses.stream()
                .map(courseService::mapToPublicCourseDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }



    @GetMapping("/{id}/progress")
    public ResponseEntity<CourseProgress> getCourseProgress(
            @AuthenticationPrincipal CustomUserDetails userDetails,
            @PathVariable Long id
    ) {
        User user = userDetails.getUser();
        Course course = courseService.getCourseById(id)
                .orElseThrow(() -> new IllegalArgumentException("Curso no encontrado"));

        return courseService.getCourseProgress(user, course)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Vista pública de un curso (sin autenticación)
    @GetMapping("/{id}/public")
    public ResponseEntity<PublicCourseDTO> getPublicCourse(@PathVariable Long id) {
        Course course = courseService.getCourseById(id)
                .orElseThrow(() -> new IllegalArgumentException("Curso no encontrado"));
        return ResponseEntity.ok(courseService.mapToPublicCourseDTO(course));
    }

    // ✅ Lista de todos los cursos públicos
    @GetMapping("/public")
    public ResponseEntity<List<PublicCourseDTO>> getAllPublicCourses() {
        List<Course> courses = courseService.getAllCourses();
        List<PublicCourseDTO> dtos = courses.stream()
                .map(courseService::mapToPublicCourseDTO)
                .toList();
        return ResponseEntity.ok(dtos);
    }
}
