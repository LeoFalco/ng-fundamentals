import { Event } from './../../models/model';
import { Observable, Subject, Subscriber } from 'rxjs';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, first, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private fireStore: AngularFirestore) { }


  getEventsSnapshot(): Observable<Event[]> {
    return this.collection().valueChanges().pipe(first())
  }

  getEvents(): Observable<Event[]> {
    return this.collection().valueChanges()
  }

  getEvent(id: string): Observable<Event> {
    return this.doc(id).valueChanges().pipe(data => {

      delay(2000)
      return data
    });
  }

  getEventSnapshot(id: string): Promise<Event> {
    return this.getEvent(id).pipe(first()).toPromise()
  }


  private collection() {
    return this.fireStore.collection<Event>('events')
  }

  private doc(id: string) {
    return this.collection().doc<Event>(id)
  }
}
