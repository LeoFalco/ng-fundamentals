import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.firstName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-z].*')]);
    this.lastName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-z].*')]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });

    this.authService.user$.pipe(first()).toPromise().then(currentUser => {

      const names = currentUser.displayName.split(' ');

      const [firstName, ...lastNameArray] = names;

      const lastName = lastNameArray.join(' ');
      this.firstName.setValue(currentUser.firstName || firstName);
      this.lastName.setValue(currentUser.lastName || lastName);
    });

  }

  saveProfile(formValue: { firstName: string, lastName: string }) {
    if (this.profileForm.valid) {
    }
  }

  cancel() {
    this.router.navigate(['events']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['user', 'login']);
  }

}
