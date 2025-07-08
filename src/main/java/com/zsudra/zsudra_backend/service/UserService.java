package com.zsudra.zsudra_backend.service;


import com.zsudra.zsudra_backend.model.User;
import com.zsudra.zsudra_backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public User registerUser(String email, String password, String fullName) {
        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setFullName(fullName);
        user.setJoinDate(LocalDateTime.now());
        return userRepository.save(user);
    }

    public User updateUser(Long userId, String email, String fullName, String newPassword) {
        User user = userRepository.findById(userId).orElseThrow();
        user.setEmail(email);
        user.setFullName(fullName);
        if (newPassword != null && !newPassword.isEmpty()) {
            user.setPassword(passwordEncoder.encode(newPassword));
        }
        return userRepository.save(user);
    }
}