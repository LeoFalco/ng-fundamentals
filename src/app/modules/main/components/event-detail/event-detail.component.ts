import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

import { EventService } from '../../../../services/event/event.service';
import { Event } from './../../../../models/model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit, OnDestroy {

  event: Event;

  constructor(
    private eventService: EventService,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {

    // todo param from url
    this.eventService.getEvent(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(event => {
        this.event = event;

      });

  }

  ngOnDestroy() {
  }

}
