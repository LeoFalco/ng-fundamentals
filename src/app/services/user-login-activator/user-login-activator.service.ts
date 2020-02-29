import { AuthService } from './../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginActivatorService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    let authenticated = this.authService.isAuthenticated()

    console.log(authenticated)
    if (authenticated) {
      this.router.navigate(['events'])
    }

    return !authenticated
  }
}
