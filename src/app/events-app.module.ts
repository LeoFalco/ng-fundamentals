import { EventsLitComponent } from './events/events-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventsLitComponent
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class EventsAppModule { }
