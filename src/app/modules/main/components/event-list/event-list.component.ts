import { Event } from './../../../../models/model';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event/event.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Observable<Event[]>

  constructor(
    private activatedRoute: ActivatedRoute, private eventService: EventService) {

  }

  ngOnInit() {
    console.log('teste')

    this.activatedRoute.data
    this.events = this.eventService.getEvents()
  }
}
