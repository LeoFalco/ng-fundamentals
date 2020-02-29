import { Event } from './../../../../models/model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit(): void {
  }

  getStartTimeClass(): string[] {

    if (this.event.time == '8:00 am') {
      return ['green', 'bold']
    }

    return []
  }

}
