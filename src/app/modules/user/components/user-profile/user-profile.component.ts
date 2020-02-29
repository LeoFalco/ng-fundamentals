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

  public profileForm: FormGroup

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    let currentUser = this.authService.currentUser();

    let firstName = new FormControl(currentUser.firstName, Validators.required);
    let lastName = new FormControl(currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName,
      lastName

    })
  }

  isFirstNameValid(): boolean {
    let firstNameControl = this.profileForm.controls.firstName;
    return !firstNameControl.touched || firstNameControl.valid
  }

  isLastNameValid(): boolean {
    let lastNameControl = this.profileForm.controls.lastName;
    return !lastNameControl.touched || lastNameControl.valid
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
