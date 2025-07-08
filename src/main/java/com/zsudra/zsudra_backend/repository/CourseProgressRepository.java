package com.zsudra.zsudra_backend.repository;


import com.zsudra.zsudra_backend.model.Course;
import com.zsudra.zsudra_backend.model.CourseProgress;
import com.zsudra.zsudra_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CourseProgressRepository extends JpaRepository<CourseProgress, Long> {
    Optional<CourseProgress> findByUserAndCourse(User user, Course course);
}