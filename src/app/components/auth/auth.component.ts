import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isForgot: boolean;
  email: '';
  password: '';
  forgotEmail: '';

  constructor(
    private router: Router
  ) {}

  validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  onLogin(): void {
    if (this.validateEmail(this.email)) {
      console.log('Submit Login Form');
      this.router.navigate(['/menu']);
    } else {
      this.email = '';
    }
  }

  onForgot(): void {
    console.log('Submit Forget Form');
  }

}
