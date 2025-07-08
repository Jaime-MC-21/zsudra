package com.zsudra.zsudra_backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class PublicCourseDTO {
    private Long id;
    private String title;
    private String description;
    private Double price;
    private Double originalPrice;
    private String imageUrl;
    private Double rating;
    private Integer studentsCount;
    private String duration;
    private String level;
    private List<String> curriculum;
    private List<LessonDTO> lessons;
    private InstructorDTO instructor;

    @Data
    public static class LessonDTO {
        private String title;
        private String duration;
        private String description;
        private Integer orderInCourse;
        private String videoUrl; // ✅ Asegúrate de tener esto
    }

    @Data
    public static class InstructorDTO {
        private String fullName;
        private String avatarUrl;
        private String bio;
    }
}
