import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  mouseOverLogin = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async loginWithGoogle() {
    await this.authService.loginWithGoogle();
    this.redirectToEvents();

  }

  async login(formValue) {
    console.log(formValue);
    await this.authService.loginWithEmailAndPass(formValue.userName, formValue.password);
    this.redirectToEvents();
  }

  cancel() {
    this.redirectToEvents();
  }


  private redirectToEvents() {
    this.router.navigate(['events']);
  }

}
