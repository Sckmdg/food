import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth: boolean;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuth = this.authService.checkAuth(); // subscribe in future
    if (this.isAuth) {
      this.router.navigate(['/menu']);
    } else {
      // this.router.navigate(['/auth'])
    }
  }

}
