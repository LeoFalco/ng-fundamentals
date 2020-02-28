import { EventRouteActivatorService } from './services/event-route-activator/event-route-activator.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RootComponent } from './components/root/root.component';
import { routes } from './routes/routes';
import { EventService } from './services/event/event.service';
import { ToastrService } from './services/toastr/toastr.service';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent,
    RootComponent,
    EventDetailComponent,
    CreateEventComponent,
    NotFoundComponent
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService],
  bootstrap: [RootComponent]
})
export class AppEventRootModule { }
