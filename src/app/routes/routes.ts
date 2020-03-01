import { CreateSessionComponent } from './../modules/main/components/create-session/create-session.component';
import { EventResolverService } from './../services/event-resolver/event-resolver.service';
import { EventListResolverService } from './../services/event-list-resolver/event-list-resolver.service';
import { EventRouteActivatorService } from './../services/event-route-activator/event-route-activator.service';
import { Routes } from "@angular/router";
import { EventListComponent } from '../modules/main/components/event-list/event-list.component';
import { CreateEventComponent } from '../modules/main/components/create-event/create-event.component';
import { EventDetailComponent } from '../modules/main/components/event-detail/event-detail.component';
import { NotFoundComponent } from '../modules/main/components/errors/not-found/not-found.component';


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

]
