import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:4001/api/admin/products";

  constructor(private httpClient: HttpClient) {
    this.loadCartItems();
  }

  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  addProduct(product: Product): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  updateProduct(id: number, product: Product): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, product);
  }

  deleteProductById(id: number): Observable<Product[]> {
    return this.httpClient.delete<Product[]>(`${this.baseURL}/${id}`);
  }



  //Cart service starts from here

  private cartItems: any[] = [];

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
