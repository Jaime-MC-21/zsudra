package com.zsudra.zsudra_backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore; // 👈 Importa esto

import lombok.*;
import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "purchases")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime purchaseDate = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore // 👈 Evita serializar al usuario entero
    private User user;

    @ManyToOne
    @JoinColumn(name = "course_id", nullable = false)
    @JsonIgnore // 👈 Evita bucle con Course
    private Course course;

    private Boolean refundRequested = false;
}
