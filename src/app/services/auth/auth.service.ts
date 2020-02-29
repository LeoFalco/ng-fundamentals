import { Credential } from './../../models/model';
import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/models/model';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logout() {
    localStorage.removeItem('current-user')
  }

  login(credential: Credential): User {

    let currentUser = {
      id: 1,
      userName: 'leoFalco',
      firstName: 'Leonardo',
      lastName: 'Falco'
    }

    localStorage.setItem('current-user', JSON.stringify(currentUser))

    return currentUser
  }

  isAuthenticated(): boolean {
    return !!this.currentUser()
  }

  currentUser(): User {
    try {
      return JSON.parse(localStorage.getItem('current-user')) as User
    } catch (e) {
      console.warn(e)
      return null
    }
  }
}
