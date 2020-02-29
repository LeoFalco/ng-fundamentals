import { Router } from '@angular/router';
import { AuthService } from './../../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public profileForm: FormGroup

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    let currentUser = this.authService.currentUser;

    let firstName = new FormControl(currentUser.firstName);
    let lastName = new FormControl(currentUser.lastName);

    this.profileForm = new FormGroup({
      firstName,
      lastName

    })
  }

  saveProfile(formValue) {
    console.log(formValue)
  }


  cancel() {
    this.router.navigate(['events'])
  }

}
