package com.zsudra.zsudra_backend.repository;



import com.zsudra.zsudra_backend.model.InstructorApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstructorApplicationRepository extends JpaRepository<InstructorApplication, Long> {
}