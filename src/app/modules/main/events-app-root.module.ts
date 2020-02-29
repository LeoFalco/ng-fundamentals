import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RootComponent } from './components/root/root.component';

import { CreateEventComponent, canDeactivateCreateEventComponent } from './components/create-event/create-event.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { routes } from 'src/app/routes/routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent,
    RootComponent,
    EventDetailComponent,
    CreateEventComponent,
    NotFoundComponent,

  ],
  providers: [
    { provide: 'canDeactivateCreateEventComponent', useValue: canDeactivateCreateEventComponent }

  ],
  bootstrap: [RootComponent]
})
export class AppEventRootModule { }
