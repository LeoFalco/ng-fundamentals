import { AuthService } from './../auth/auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { first, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginActivatorService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    // can activate if not autenticated
    return this.authService.isAuthenticated()
      .pipe(
        first(),
        map(autenticated => {

          if (autenticated) {
            this.router.navigate(['events'])

            return false
          }

          return true
        })
      )
  }
}
