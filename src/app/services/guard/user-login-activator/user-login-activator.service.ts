import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { AuthService } from './../../auth/auth.service';

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
            this.router.navigate(['events']);

            return false;
          }

          return true;
        })
      );
  }
}
