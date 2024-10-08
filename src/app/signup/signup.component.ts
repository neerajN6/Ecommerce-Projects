import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../usermodel/user';
import { UserService } from '../userservice/user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  ngForm: NgForm;
  user: User = new User();
  constructor(private userService: UserService, private route: Router) { }

  saveUser() {
    this.userService.addUser(this.user).subscribe(data => {
      console.log("Data saved is ", data);
    },
      error => console.error(error));
  }

  onSubmit() {
    console.log("Info Data : ", this.user);
    this.saveUser();
    alert("User Account has been Created");
    this.route.navigate(['login']);
  }
}
