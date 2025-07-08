package com.zsudra.zsudra_backend.repository;


import com.zsudra.zsudra_backend.model.Course;
import com.zsudra.zsudra_backend.model.Purchase;
import com.zsudra.zsudra_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    List<Purchase> findByUser(User user);
    boolean existsByUserAndCourse(User user, Course course);
}