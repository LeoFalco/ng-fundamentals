import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Event } from './../../models/model';
import { EventService } from './../event/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<Event[]> {

  constructor(private eventService: EventService) { }

  resolve() {

    console.log('teste resolve');

    this.eventService.getEvents();


    return this.eventService.getEventsSnapshot();
  }
}
