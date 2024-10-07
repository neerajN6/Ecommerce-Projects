//package com.example.ecommerce.repository;
//
//import com.example.ecommerce.model.Cart;
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import java.util.List;
//
//public interface CartRepository extends JpaRepository<Cart, Long> {
//    List<Cart> findByUserId(Long userId);
//
//    List<Cart> findByUser_IdAndId(Long userId, Long cartId);
//
//    void deleteByProductId(Long productId);
//}
