import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() {
    // Load initial cart items from localStorage if available
    this.loadCartItems();
  }

  private loadCartItems() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const cartData = localStorage.getItem('cart');
      this.cartItems = cartData ? JSON.parse(cartData) : [];
    }
  }

  addToCart(product: any, quantity: number) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity; // Increase the quantity
      existingItem.totalPrice = existingItem.quantity * product.price; // Update the total price
    } else {
      this.cartItems.push({ ...product, quantity, totalPrice: product.price * quantity });
    }
    this.saveCartItems();
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  updateCartItemQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      item.totalPrice = item.price * quantity;
    }
    this.saveCartItems();
  }

  removeCartItem(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.saveCartItems();
  }

  removeCartItems() {
    this.cartItems = []; // Clear the cart items array
    this.saveCartItems(); // Update localStorage
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total: number, item: any) => total + item.totalPrice, 0);
  }

  // Utility method to save cart items to localStorage
  private saveCartItems() {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
}
