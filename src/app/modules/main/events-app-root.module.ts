import { routes } from 'src/app/routes/routes';

import { NgModule } from '@angular/core';
import 'firebase/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import {
  canDeactivateCreateEventComponent, CreateEventComponent
} from './components/create-event/create-event.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RootComponent } from './components/root/root.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgxSpinnerModule } from 'ngx-spinner';
import { CreateSessionComponent } from './components/create-session/create-session.component';

var firebaseConfig = {
  apiKey: "AIzaSyCZRjo3xwPvZOyNdpprmjwBlG12qwqrqQ8",
  authDomain: "angular-events-d24fd.firebaseapp.com",
  databaseURL: "https://angular-events-d24fd.firebaseio.com",
  projectId: "angular-events-d24fd",
  storageBucket: "angular-events-d24fd.appspot.com",
  messagingSenderId: "275628833694",
  appId: "1:275628833694:web:5de4e329329546d94bb48f",
  measurementId: "G-9MPBZ78S09"
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  declarations: [
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent,
    RootComponent,
    EventDetailComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent
  ],
  providers: [
    { provide: 'canDeactivateCreateEventComponent', useValue: canDeactivateCreateEventComponent }

  ],
  bootstrap: [RootComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppEventRootModule { }
