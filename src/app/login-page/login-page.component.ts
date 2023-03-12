import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent implements OnInit {

  username: string = "";
  password: string = "";
  imageUrl="assets/images/background.jpg"

  
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/dashboard']);
      return
    }
    if (this.username === 'user' && this.password === 'user') {
      this.router.navigate(['/userPage']);
      return
    }
    alert('Invalid username or password');

  }
}
