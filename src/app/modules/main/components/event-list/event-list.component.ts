import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { EventService } from '../../../../services/event/event.service';
import { Event } from './../../../../models/model';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Observable<Event[]>;

  constructor(
    private activatedRoute: ActivatedRoute, private eventService: EventService) {

  }

  ngOnInit() {
    console.log('teste');
    this.events = this.eventService.getEvents();
  }
}
