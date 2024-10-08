//package com.example.ecommerce.controller;
//
//import com.example.ecommerce.Exceptions.ResourceNotFoundException;
//import com.example.ecommerce.model.Cart;
//import com.example.ecommerce.model.Product;
//import com.example.ecommerce.model.User;
//import com.example.ecommerce.repository.CartRepository;
//import com.example.ecommerce.service.CartService;
//import com.example.ecommerce.service.ProductService;
//import com.example.ecommerce.service.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api")
//public class CartController {
//
//    @Autowired
//    private CartService cartService;
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    @Autowired
//    private ProductService productService;
//
//    @Autowired
//    private UserService userService;
//
//    @GetMapping("user/{userId}/cart/{cartId}")
//    public ResponseEntity<List<Cart>> getCartItems2(@PathVariable Long userId,
//                                                   @PathVariable Long cartId) {
//
//        List<Cart> cartItems = cartService.getCartItems2(userId, cartId);
//
//        return ResponseEntity.ok(cartItems);
//
//    }
//
//    @GetMapping("cart/user/{userId}")
//    public ResponseEntity<List<Cart>> getCartItems2(@PathVariable Long userId) {
//
//        List<Cart> cartItems = cartService.getCartItems(userId);
//
//        return ResponseEntity.ok(cartItems);
//
//    }
//
//
//    @PostMapping
//    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
//        long p_id= cart.getProduct().getId();
//        long u_id = cart.getUser().getId();
//        Product product = productService.getProductById(p_id);
//        User user = userService.findById(u_id).orElseThrow();
//        cart.setProduct(product);
//        cart.setUser(user);
//        Cart _cart  = cartService.addToCart(cart);
//        return new ResponseEntity<>(_cart, HttpStatus.CREATED);
//    }
//}
