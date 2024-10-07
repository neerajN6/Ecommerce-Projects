package com.example.ecommerce.controller;

import com.example.ecommerce.model.Role;
import com.example.ecommerce.model.User;
import com.example.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private UserService userService;
    
    

    // Create Admin User
    @PostMapping("/register")
    public ResponseEntity<User> registerAdmin(@RequestBody User adminUser) {
        adminUser.setRole(Role.ADMIN);  // Assign role using enum Role.ADMIN
        User createdAdmin = userService.saveUser(adminUser);
        return ResponseEntity.ok(createdAdmin);
    }

    // Get All Users (Admin Only)
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }
    
    
    

    // Delete User by ID (Admin Only)
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUserById(id);
        return ResponseEntity.noContent().build();
    }
}
