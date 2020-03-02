import { Routes } from '@angular/router';

import { CreateEventComponent } from '../modules/main/components/create-event/create-event.component';
import { NotFoundComponent } from '../modules/main/components/errors/not-found/not-found.component';
import { EventDetailComponent } from '../modules/main/components/event-detail/event-detail.component';
import { EventListComponent } from '../modules/main/components/event-list/event-list.component';
import { CreateSessionComponent } from './../modules/main/components/create-session/create-session.component';
import { EventRouteActivatorService } from './../services/guard/event-route-activator/event-route-activator.service';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventListComponent,
  },
  {
    // needs to come first from route /events/:id
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEventComponent']
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [EventRouteActivatorService],
  },
  {
    path: 'events/sessions/new',
    component: CreateSessionComponent,
  },


  {
    // load from another module
    path: 'user',
    loadChildren: () => import('./../modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },

];
