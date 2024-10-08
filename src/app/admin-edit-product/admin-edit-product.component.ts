import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../admin-page/service/product.service';
import { Product } from '../admin-page/model/product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-edit-product',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-edit-product.component.html',
  styleUrl: './admin-edit-product.component.css'
})
export class AdminEditProductComponent {
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProductById(productId).subscribe(data => {
      this.product = data;
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
      alert('Product updated successfully');
      this.router.navigate(['admin-product']);
    }, error => {
      console.error('Error updating product', error);
      alert('Failed to update product');
    });
  }
}
