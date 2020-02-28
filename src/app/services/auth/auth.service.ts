import { Credential } from './../../models/model';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: User

  constructor() { }


  login(credential: Credential): User {

    this.currentUser = {
      id: 1,
      userName: 'leoFalco',
      firstName: 'Leonardo',
      lastName: 'Falco'
    }

    return this.currentUser
  }

  isAuthenticated() {
    return !!this.currentUser
  }
}
