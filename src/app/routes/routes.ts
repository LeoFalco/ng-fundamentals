import { EventRouteActivatorService } from './../services/event-route-activator/event-route-activator.service';
import { NotFoundComponent } from './../components/errors/not-found/not-found.component';
import { CreateEventComponent } from './../components/create-event/create-event.component';
import { Routes } from "@angular/router";

import { EventDetailComponent } from './../components/event-detail/event-detail.component';
import { EventListComponent } from './../components/event-list/event-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventListComponent
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
    canActivate: [EventRouteActivatorService]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
]
