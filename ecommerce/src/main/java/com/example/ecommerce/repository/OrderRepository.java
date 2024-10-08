package com.example.ecommerce.repository;

import com.example.ecommerce.model.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
    // Custom query methods can be defined here if needed
}
