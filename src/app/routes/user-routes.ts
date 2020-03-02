import { Routes } from '@angular/router';

import { CreateAccountComponent } from './../modules/user/components/create-account/create-account.component';
import { LoginComponent } from './../modules/user/components/login/login.component';
import { UserProfileComponent } from './../modules/user/components/user-profile/user-profile.component';
import { UserLoginActivatorService } from './../services/guard/user-login-activator/user-login-activator.service';
import { UserProfileActivatorService } from './../services/guard/user-profile-activator/user-profile-activator.service';

export const userRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [UserProfileActivatorService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserLoginActivatorService]
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
    canActivate: [UserLoginActivatorService]
  }
];
