//package com.example.ecommerce.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//
//@Configuration
//public class SecurityConfig {
//
//    @Bean
//    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//        http
//            .csrf().disable()  // Disable CSRF for simplicity (not recommended in production)
//            .authorizeHttpRequests() // Updated method for defining authorization rules
//            .requestMatchers("/api/auth/**").permitAll() // Allow public access to auth endpoints (registration, login)
//            .requestMatchers("/api/admin/**").permitAll() // Open admin-specific endpoints
//            .anyRequest().authenticated() // Authenticate any other requests
//            .and()
//            .formLogin().disable(); // Disable form-based login
//
//        return http.build();
//    }
//}
