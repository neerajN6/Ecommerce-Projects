//package com.example.ecommerce.service;
//
//import com.example.ecommerce.model.Cart;
//import com.example.ecommerce.model.Product;
//import com.example.ecommerce.repository.CartRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class CartService {
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    public List<Cart> getCartItems(Long userId) {
//        return cartRepository.findByUserId(userId);
//    }
//
//
//
//    public List<Cart> getCartItems2(Long userId, Long cartId) {
//        // Logic to retrieve cart items based on userId and cartId
//        return cartRepository.findByUser_IdAndId(userId, cartId);
//    }
//    public Cart addToCart(Cart cart) {
//        return cartRepository.save(cart);
//    }
//
//    public Cart getCartById(Long id) {
//        return cartRepository.findById(id).orElse(null);
//    }
//
//    public Cart updateCart(Long id, Cart cartDetails) {
//        Cart cart = getCartById(id);
//        if (cart != null) {
//            cart.setQuantity(cartDetails.getQuantity());
//            cart.setProduct(cartDetails.getProduct());
//            return cartRepository.save(cart);
//        }
//        return null;
//    }
//
//    public void deleteCart(Long id) {
//        cartRepository.deleteById(id);
//    }
//}
