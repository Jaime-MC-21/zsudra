package com.zsudra.zsudra_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "lessons")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String duration;

    @JsonIgnore // 👈 oculta el videoUrl del JSON
    @Column(nullable = false)
    private String videoUrl;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private Integer orderInCourse;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    @JsonIgnore // 👈 previene el bucle infinito
    private Course course;
}
