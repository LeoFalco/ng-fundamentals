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
  nickName: FormControl;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.nickName = new FormControl('', [Validators.required, Validators.pattern('[a-zA-z].*')]);

    this.profileForm = new FormGroup({
      nickName: this.nickName
    });

    this.authService.user$.pipe(first()).toPromise().then(currentUser => {
      this.nickName.setValue(currentUser.nickName || '');
    });
  }

  saveProfile(formValue: { nickName: string}) {
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
