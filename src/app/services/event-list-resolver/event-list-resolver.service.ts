import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Event } from './../../models/model';
import { EventService } from './../event/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<Event[]> {

  constructor(private eventService: EventService, private firestore: AngularFirestore) { }

  resolve() {

    console.log('teste resolve');

    this.eventService.getEvents().subscribe(events => {
      events.forEach(event => {

        event.sessions.forEach(session => {
          session.id = '' + session.id;
        });

        this.firestore.collection<Event>('events').doc(event.id).set(event, { merge: true });
      });
    });


    return this.eventService.getEventsSnapshot();
  }
}
