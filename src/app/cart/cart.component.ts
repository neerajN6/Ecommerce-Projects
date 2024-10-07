import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class CartComponent {
  cartItems: any[] = [];

  constructor(private cartService: CartService, private route: Router) {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  updateQuantity(item: any) {
    if (item.quantity < 1) {
      item.quantity = 1; // Prevent negative or zero quantity
    }
    this.cartService.updateCartItemQuantity(item.id, item.quantity);
    this.loadCartItems(); // Refresh the cart items
  }

  removeItem(productId: number) {
    this.cartService.removeCartItem(productId);
    this.loadCartItems(); // Refresh the cart items
  }

  removeItems() {
    this.cartService.removeCartItems();
    this.loadCartItems;
  }

  calculateTotal(): number {
    return this.cartService.calculateTotal();
  }

  buyNow() {
    this.removeItems();
    this.route.navigate(['order-page']);
  }
}
