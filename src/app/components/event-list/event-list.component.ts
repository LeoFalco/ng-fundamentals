import { ToastrService } from './../../services/toastr/toastr.service';
import { EventService } from './../../services/event/event.service';
import { Event } from './../../models/model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[]

  constructor(
    private eventService: EventService,
    private toastrService: ToastrService) {

  }

  ngOnInit() {
    console.log('teste')
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success({ message: eventName })

  }
}
