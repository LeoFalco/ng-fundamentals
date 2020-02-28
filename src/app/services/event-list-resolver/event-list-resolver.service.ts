import { EventService } from './../event/event.service';
import { Event } from './../../models/model';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<Event[]> {

  constructor(private eventService: EventService) { }

  resolve() {
    return this.eventService.getEvents()
  }
}
