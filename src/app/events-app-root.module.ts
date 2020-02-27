import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppEventRootComponent } from './events-app-root.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './events/event-list/event-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppEventRootComponent,
    EventThumbnailComponent,
    EventListComponent
  ],
  providers: [],
  bootstrap: [AppEventRootComponent]
})
export class AppEventRootModule { }
