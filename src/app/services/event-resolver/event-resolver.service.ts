import { EventService } from './../event/event.service';
import { Event } from './../../models/model';
import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<Event> {

  constructor(private eventService: EventService) { }

  resolve(snapshot: ActivatedRouteSnapshot) {

    console.log('teste resolve', snapshot)

    this.eventService.getEvents();

    return this.eventService.getEventSnapshot(snapshot.paramMap.get('id'))
  }
}
