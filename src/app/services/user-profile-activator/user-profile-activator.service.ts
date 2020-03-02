import { AuthService } from './../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileActivatorService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    return this.authService.isAuthenticated()
      .pipe(
        first(),
        map(autenticated => {

          if (!autenticated) {
            this.router.navigate(['user', 'login'])

            return false
          }

          return true
        })
      )
  }
}
