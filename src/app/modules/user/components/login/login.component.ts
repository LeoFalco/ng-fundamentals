import { AuthService } from 'src/app/services/auth/auth.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string

  password: string

  mouseOverLogin = false

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formValue) {
    console.log(formValue)

    this.authService.login({
      userName: formValue.userName,
      password: formValue.password
    })

    this.redirectToEvents()
  }

  cancel() {
    this.redirectToEvents()
  }


  private redirectToEvents() {
    this.router.navigate(['events'])
  }

}
