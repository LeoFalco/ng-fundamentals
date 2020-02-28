import { LoginComponent } from './../modules/user/components/login/login.component';
import { UserProfileComponent } from './../modules/user/components/user-profile/user-profile.component';
import { Routes } from '@angular/router';

export const userRoutes: Routes = [
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
]
