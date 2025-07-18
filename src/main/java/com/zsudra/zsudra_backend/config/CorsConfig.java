package com.zsudra.zsudra_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class CorsConfig {
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedMethods("*")
                        .allowedOrigins("http://localhost:8080") // o "*" si solo pruebas
                        .allowCredentials(true); // ⬅️ importante para mantener sesión
            }
        };
    }
}

