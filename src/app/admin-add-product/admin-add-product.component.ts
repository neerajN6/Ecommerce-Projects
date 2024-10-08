import { Component } from '@angular/core';
import { ProductService } from '../admin-page/service/product.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../admin-page/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin-add-product.component.html',
  styleUrl: './admin-add-product.component.css'
})
export class AdminAddProductComponent {

  constructor(private productService: ProductService, private route: Router) { }

  submitForm: NgForm;

  product: Product = new Product();

  saveProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      console.log("Data saved is ", data);
      this.goToProductsList();
    },
      error => console.error(error));
  }

  goToProductsList() {
    this.route.navigate(['/admin-product']);
  }

  onSubmit() {
    console.log("Save product data as ", this.product);
    alert("Item added successfully");
    this.saveProduct();
  }

}
