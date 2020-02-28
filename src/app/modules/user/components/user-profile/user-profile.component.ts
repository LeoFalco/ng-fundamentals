import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    let firstName = new FormControl();
    let lastName = new FormControl();

    this.profileForm = new FormGroup({
      firstName,
      lastName

    })

  }

}
