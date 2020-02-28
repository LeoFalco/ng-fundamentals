import { Event } from './../../models/model';
import { EventService } from './../../services/event/event.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {


  @Input()
  event: Event

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    // todo param from url
    this.event = this.eventService.getEvent(1)
  }

}
