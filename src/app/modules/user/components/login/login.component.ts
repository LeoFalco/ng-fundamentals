import { AuthService } from './../../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'src/app/services/toastr/toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  mouseOverLogin = false;

  selectedEmailAndPass = false;

  constructor(private toast: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async loginWithGoogle() {
    console.log('teste 1')
    return this.authService.loginWithGoogle()
      .then(user => this.toast.info({ message: `Welcome ${user.nickName}` }))
      .then(() => this.router.navigate(['events']))
      .catch(error => this.toast.error({ message: error.message }))

  }

  async login(formValue) {
    console.log(formValue);
    await this.authService.loginWithEmailAndPass(formValue.userName, formValue.password)
      .then(user => this.toast.info({ message: `Welcome ${user.nickName}`}))
      .then(() => this.router.navigate(['events']))
      .catch(error => this.toast.error({ message: error.message }))

  }




}
