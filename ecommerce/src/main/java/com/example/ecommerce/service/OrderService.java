package com.example.ecommerce.service;

import com.example.ecommerce.model.OrderEntity;
import com.example.ecommerce.model.OrderItem; // Ensure this import is present
import com.example.ecommerce.model.Product;
import com.example.ecommerce.repository.OrderRepository;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private ProductRepository productRepository;

    public OrderEntity saveOrder(OrderEntity order) {
        double totalPrice = 0.0;

        // Check product quantities before saving the order
        for (OrderItem item : order.getOrderItems()) {
            Product product = productRepository.findById(item.getProductId())
                    .orElseThrow(() -> new RuntimeException("Product not found"));
            if (product.getQuantity() < item.getQuantity()) {
                throw new RuntimeException("Not enough stock for product ID: " + item.getProductId());
            }
            product.setQuantity(product.getQuantity() - item.getQuantity());
            productRepository.save(product);

            // Calculate total price
            totalPrice += product.getPrice() * item.getQuantity();
        }

        order.setTotalPrice(totalPrice);
        return orderRepository.save(order);
    }

}
