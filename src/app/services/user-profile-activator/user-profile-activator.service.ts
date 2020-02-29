import { AuthService } from './../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileActivatorService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    let authenticated = this.authService.isAuthenticated()

    if (!authenticated) {
      this.router.navigate(['user', 'login'])
    }

    return authenticated
  }
}
