package com.zsudra.zsudra_backend.service;

import com.zsudra.zsudra_backend.dto.CreateCourseRequest;
import com.zsudra.zsudra_backend.dto.PublicCourseDTO;
import com.zsudra.zsudra_backend.model.*;
import com.zsudra.zsudra_backend.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final PurchaseRepository purchaseRepository;
    private final CourseProgressRepository progressRepository;
    private final UserRepository userRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long id) {
        return courseRepository.findById(id);
    }

    @Transactional
    public Purchase purchaseCourse(User user, Course course) {
        if (purchaseRepository.existsByUserAndCourse(user, course)) {
            throw new IllegalStateException("El usuario ya ha comprado este curso");
        }

        Purchase purchase = new Purchase();
        purchase.setUser(user);
        purchase.setCourse(course);
        purchase.setPurchaseDate(LocalDateTime.now());

        // Crear progreso inicial
        CourseProgress progress = new CourseProgress();
        progress.setUser(user);
        progress.setCourse(course);
        progress.setCurrentLesson(0);
        progressRepository.save(progress);

        return purchaseRepository.save(purchase);
    }

    public List<Course> getPurchasedCourses(User user) {
        return purchaseRepository.findByUser(user).stream()
                .map(Purchase::getCourse)
                .toList();
    }

    public Optional<CourseProgress> getCourseProgress(User user, Course course) {
        return progressRepository.findByUserAndCourse(user, course);
    }

    @Transactional
    public CourseProgress markLessonComplete(User user, Course course, Long lessonId) {
        CourseProgress progress = progressRepository.findByUserAndCourse(user, course)
                .orElseThrow(() -> new IllegalStateException("No se encontró el progreso del curso"));

        progress.getCompletedLessons().add(lessonId);
        return progressRepository.save(progress);
    }

    @Transactional
    public Course createCourse(CreateCourseRequest request, User instructor) {
        Course course = new Course();
        course.setTitle(request.getTitle());
        course.setDescription(request.getDescription());
        course.setPrice(request.getPrice());
        course.setOriginalPrice(request.getOriginalPrice());
        course.setImageUrl(request.getImageUrl());
        course.setRating(request.getRating());
        course.setStudentsCount(request.getStudentsCount());
        course.setDuration(request.getDuration());
        course.setLevel(request.getLevel());
        course.setCurriculum(request.getCurriculum());
        course.setInstructor(instructor);

        List<Lesson> lessons = request.getLessons().stream().map(dto -> {
            Lesson lesson = new Lesson();
            lesson.setTitle(dto.getTitle());
            lesson.setDuration(dto.getDuration());
            lesson.setVideoUrl(dto.getVideoUrl());
            lesson.setDescription(dto.getDescription());
            lesson.setOrderInCourse(dto.getOrderInCourse());
            lesson.setCourse(course);
            return lesson;
        }).toList();

        course.setLessons(lessons);

        return courseRepository.save(course);
    }

    public User findInstructorByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Instructor no encontrado"));
    }

    // ✅ Método para exponer curso público (sin video ni progreso)
    public PublicCourseDTO mapToPublicCourseDTO(Course course) {
        PublicCourseDTO dto = new PublicCourseDTO();
        dto.setId(course.getId());
        dto.setTitle(course.getTitle());
        dto.setDescription(course.getDescription());
        dto.setPrice(course.getPrice());
        dto.setOriginalPrice(course.getOriginalPrice());
        dto.setImageUrl(course.getImageUrl());
        dto.setRating(course.getRating());
        dto.setStudentsCount(course.getStudentsCount());
        dto.setDuration(course.getDuration());
        dto.setLevel(course.getLevel());
        dto.setCurriculum(course.getCurriculum());

        // ✅ Incluir videoUrl también
        List<PublicCourseDTO.LessonDTO> lessonDTOs = course.getLessons().stream().map(lesson -> {
            PublicCourseDTO.LessonDTO l = new PublicCourseDTO.LessonDTO();
            l.setTitle(lesson.getTitle());
            l.setDuration(lesson.getDuration());
            l.setDescription(lesson.getDescription());
            l.setOrderInCourse(lesson.getOrderInCourse());
            l.setVideoUrl(lesson.getVideoUrl()); // ✅ Asegúrate de esto
            return l;
        }).toList();

        dto.setLessons(lessonDTOs);

        PublicCourseDTO.InstructorDTO instructorDTO = new PublicCourseDTO.InstructorDTO();
        instructorDTO.setFullName(course.getInstructor().getFullName());
        instructorDTO.setAvatarUrl(course.getInstructor().getAvatarUrl());
        instructorDTO.setBio("Instructor en Zsudra");

        dto.setInstructor(instructorDTO);

        return dto;
    }

}
