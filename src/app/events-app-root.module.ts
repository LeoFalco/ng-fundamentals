import { ToastrService } from './services/toastr/toastr.service';
import { EventService } from './services/event/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from './components/root/root.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

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
  providers: [EventService, ToastrService],
  bootstrap: [RootComponent]
})
export class AppEventRootModule { }
