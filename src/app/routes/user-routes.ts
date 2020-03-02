import { CreateAccountComponent } from './../modules/user/components/create-account/create-account.component';
import { UserLoginActivatorService } from './../services/user-login-activator/user-login-activator.service';
import { UserProfileActivatorService } from './../services/user-profile-activator/user-profile-activator.service';
import { LoginComponent } from './../modules/user/components/login/login.component';
import { UserProfileComponent } from './../modules/user/components/user-profile/user-profile.component';
import { Routes } from '@angular/router';

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
]
