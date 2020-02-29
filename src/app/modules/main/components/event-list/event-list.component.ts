import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[]

  constructor(
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    console.log('teste')
    this.events = this.activatedRoute.snapshot.data['events']
  }
}
