import { User } from './../../../../models/model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup
  firstName: FormControl
  lastName: FormControl

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    let currentUser = this.authService.currentUser();

    this.firstName = new FormControl(currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl(currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-z].*')]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  saveProfile(formValue: { firstName: string, lastName: string }) {
    if (this.profileForm.valid) {
    }
  }

  cancel() {
    this.router.navigate(['events'])
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['user', 'login'])
  }

}
