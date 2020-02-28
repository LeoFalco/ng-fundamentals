import { Routes } from "@angular/router";

import { EventDetailComponent } from './../components/event-detail/event-detail.component';
import { EventListComponent } from './../components/event-list/event-list.component';

export const routes: Routes = [
  {
    path: 'events',
    component: EventListComponent
  },
  {
    path: 'events/:id',
    component: EventDetailComponent
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
]
