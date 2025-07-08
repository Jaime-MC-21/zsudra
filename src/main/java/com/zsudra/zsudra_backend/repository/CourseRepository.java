package com.zsudra.zsudra_backend.repository;


import com.zsudra.zsudra_backend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByTitleContainingIgnoreCase(String title);

    @Query("SELECT c FROM Course c JOIN c.instructor i WHERE i.fullName LIKE %:instructor%")
    List<Course> findByInstructorName(@Param("instructor") String instructor);
}