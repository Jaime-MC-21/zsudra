package com.zsudra.zsudra_backend.dto;

import lombok.Data;
import java.util.List;

@Data
public class CreateCourseRequest {
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

    @Data
    public static class LessonDTO {
        private String title;
        private String duration;
        private String videoUrl;
        private String description;
        private Integer orderInCourse;
    }
}
