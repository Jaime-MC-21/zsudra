package com.zsudra.zsudra_backend.dto;

import lombok.Data;

@Data
public class PublicLessonDTO {
    private String title;
    private String duration;
    private String description;
    private Integer orderInCourse;
}
