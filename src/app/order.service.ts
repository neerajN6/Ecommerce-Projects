import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderEntity } from './cart/order-entity';

@Injectable({
  providedIn: 'root'
})




export class OrderService {
  

  private baseURL = "http://localhost:4001/api/orders";
  constructor(private httpClient: HttpClient) { }

  updateQuantity(orders) {
    console.log(orders);
    return this.httpClient.post<any>(this.baseURL,orders);
  }
}
