import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../admin-page/service/product.service';
import { Product } from '../admin-page/model/product';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-product-list.component.html',
  styleUrl: './admin-product-list.component.css'
})

export class AdminProductListComponent {

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

  addButton() {
    this.router.navigate(['add-product']);
  }

  editProduct(id: number): void {
    this.router.navigate(['/admin-edit', id]);
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

