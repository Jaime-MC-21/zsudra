package com.zsudra.zsudra_backend.service;

import org.springframework.transaction.annotation.Transactional;
import com.zsudra.zsudra_backend.model.*;
import com.zsudra.zsudra_backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class InstructorService {
    private final InstructorApplicationRepository applicationRepository;
    private final UserRepository userRepository;

    public InstructorApplication submitApplication(String name, String email, String experience) {
        InstructorApplication application = new InstructorApplication();
        application.setName(name);
        application.setEmail(email);
        application.setExperience(experience);
        application.setApplicationDate(LocalDateTime.now());
        return applicationRepository.save(application);
    }


    @Transactional
    public User approveApplication(Long applicationId) {
        InstructorApplication application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new IllegalArgumentException("Solicitud no encontrada"));

        User user = userRepository.findByEmail(application.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado"));

        user.setRole(User.UserRole.INSTRUCTOR);
        application.setStatus(InstructorApplication.ApplicationStatus.APPROVED);

        userRepository.save(user);
        applicationRepository.save(application);

        return user;
    }
}
