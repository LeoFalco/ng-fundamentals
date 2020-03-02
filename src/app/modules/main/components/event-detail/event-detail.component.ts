import { Observable } from 'rxjs';
import { Event } from './../../../../models/model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';
import { NgxSpinnerService } from 'ngx-spinner';

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
