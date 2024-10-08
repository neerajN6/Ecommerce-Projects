import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { User } from '../usermodel/user';
import { UserService } from '../userservice/user.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  gForm: NgForm;
  user: User = new User();

  errorMessage: string = '';
  constructor(private userService: UserService, private route: Router) { }

  onSubmit() {
    this.errorMessage = "";
    this.userService.loginUser(this.user.username, this.user.password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        console.log(response);
        if (response === "USER") {
          this.route.navigate(['home']);
        } else {
          this.route.navigate(['admin-product']);
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert(error['error']);
        this.errorMessage = 'Invalid username or password'; // Set the error message
      }
    });
  }

  navigate() {
    this.route.navigate(['signup']);
  }
}

