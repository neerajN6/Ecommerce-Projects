import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../usermodel/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "http://localhost:4001/api/auth";
  constructor(private httpClient: HttpClient) { }

  addUser(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/register`, user);
  }

  loginUser(username: string, password: string): Observable<string> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    return this.httpClient.post<string>(`${this.baseURL}/login`, body.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      responseType: 'text' as 'json' // Specify the response type as text
    });
  }
}
