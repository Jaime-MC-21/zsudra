package com.zsudra.zsudra_backend.config;

import com.zsudra.zsudra_backend.model.User;
import com.zsudra.zsudra_backend.repository.CourseRepository;
import com.zsudra.zsudra_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    private final UserRepository userRepository;
    private final CourseRepository courseRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Crear admin si no existe
        if (userRepository.findByEmail("admin@zsudra.com").isEmpty()) {
            User admin = new User();
            admin.setUsername("admin");
            admin.setEmail("admin@zsudra.com");
            admin.setPassword(passwordEncoder.encode("admin123"));
            admin.setFullName("Administrador");
            admin.setRole(User.UserRole.ADMIN);
            userRepository.save(admin);
        }

        // Crear instructor si no existe
        if (userRepository.findByEmail("maria@zsudra.com").isEmpty()) {
            User instructor = new User();
            instructor.setUsername("maria");
            instructor.setEmail("maria@zsudra.com");
            instructor.setPassword(passwordEncoder.encode("maria123"));
            instructor.setFullName("María González");
            instructor.setRole(User.UserRole.INSTRUCTOR);
            userRepository.save(instructor);
        }

        // Los cursos se insertan desde pgAdmin manualmente
    }
}
