import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { first } from 'rxjs/operators';

import { Event, Session } from './../../models/model';


export interface EventServiceInterface {
  getSessions(eventID: string): Observable<Session[]>;

  getSessions(eventID: string): Observable<Session[]>;

  mergeSesseion(eventID: string, session: Session);

  getEventsSnapshot(): Promise<Event[]>;

  getEvents(): Observable<Event[]>;

  getEvent(id: string): Observable<Event>;

  getEventSnapshot(id: string): Promise<Event>;
}

@Injectable({
  providedIn: 'root'
})
export class EventService implements EventServiceInterface {

  constructor(private fireStore: AngularFirestore) { }

  getSessions(eventID: string): Observable<Session[]> {
    return this.doc(eventID).collection<Session>('sessions').valueChanges();
  }

  mergeSesseion(eventID: string, session: Session): void {
    const sessionId = session.id || this.fireStore.createId();
    this.doc(eventID).collection('sessions').doc(sessionId).set(session, { merge: true });
  }

  getEventsSnapshot(): Promise<Event[]> {
    return this.getEvents().pipe(first()).toPromise();
  }

  getEvents(): Observable<Event[]> {
    return this.collection().valueChanges();
  }

  getEvent(id: string): Observable<Event> {
    return this.doc(id).valueChanges();
  }

  getEventSnapshot(id: string): Promise<Event> {
    return this.getEvent(id).pipe(first()).toPromise();
  }


  private collection() {
    return this.fireStore.collection<Event>('events');
  }

  private doc(id: string) {
    return this.collection().doc<Event>(id);
  }
}
