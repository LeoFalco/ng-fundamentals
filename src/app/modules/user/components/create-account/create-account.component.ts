import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  mouseOverLogin: boolean

  password: string
  userName: string

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  createAccount(formValue) {
  }

  cancel() {

  }
}
