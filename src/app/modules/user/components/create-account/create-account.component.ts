import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  mouseOverLogin: boolean;

  password: string;
  userName: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  createAccount(formValue) {
  }

  cancel() {

  }
}
