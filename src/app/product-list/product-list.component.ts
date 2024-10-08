import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from './service/product.service';
import { Product } from './model/product';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  imports: [CommonModule, FormsModule, RouterLink]
})
export class ProductListComponent {

  products: Product[];

  enteredId: number;

  quantity: number;

  quantities: number[];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
    })
  }

  addToCart(product: any) {
    this.productService.addToCart(product, product.quantity);
    alert(`${product.name} added to cart!`);
  }

  changeValue(quantity: number) {
    this.quantity = quantity;
    this.quantities = Array.from({ length: quantity }, (_, i) => i + 1);
  }

  cartButton() {
    this.router.navigate(['cart']);
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProductById(id).subscribe(() => {
        this.products = this.products.filter(product => product.id !== id);
        alert('Product deleted successfully');
      }, error => {
        console.error('Error deleting product', error);
        alert('Failed to delete product');
      });
    }
  }
}
