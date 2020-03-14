import { Session, Event } from './../../models/model';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { EventService, EventServiceInterface } from './event.service';
import { serialize } from 'v8';

class EventServiceMock implements EventServiceInterface {

  getSessions(eventID: string): Observable<Session[]> {
    return null;
  }

  mergeSesseion(eventID: string, session: Session) {
    throw new Error('Method not implemented.');
  }

  getEventsSnapshot(): Promise<Event[]> {
    return null;
  }

  getEvents(): import('rxjs').Observable<Event[]> {
    return null;
  }

  getEvent(id: string): import('rxjs').Observable<Event> {
    return null;
  }

  getEventSnapshot(id: string): Promise<Event> {
    return null;
  }

}


describe('EventService', () => {

  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: EventService, useClass: EventServiceMock }]
    });

    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
