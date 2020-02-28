import { Event } from './../../model/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  event: Event = {
    id: 1,
    name: 'Angular connect',
    date: '9/26/2026',
    time: '10:00 am',
    price: 599.99,
    iamgeUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

}
