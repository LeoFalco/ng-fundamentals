import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent,
    RootComponent
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppEventRootModule { }
