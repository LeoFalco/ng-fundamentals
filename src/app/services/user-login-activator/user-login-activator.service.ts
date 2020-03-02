import { AuthService } from './../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginActivatorService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return true;
    //return this.authService.isAuthenticated().pipe(first())
  }
}
