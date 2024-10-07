import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:4001/api/admin/products";

  constructor(private httpClient: HttpClient) { }

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
}
