import { EventService } from './../../services/event/event.service';
import { Event } from './../../models/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {

  events: Event[]

  constructor(eventService: EventService) {
    this.events = eventService.list();
  }

}
