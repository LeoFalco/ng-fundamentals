import { Component } from '@angular/core';

@Component({
  selector: 'app-events-list',
  template: `
  <div>
    <h1>Upcomming asss events</h1>
    <hr>
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>location : {{ event.location.address }}</span>
        <span>&nbsp;</span>
        <span>{{ event.location.city }}, {{ event.location.country }}</span>

      </div>

    </div>
  </div>
  `

})
export class EventsLitComponent {
  event = {
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


  constructor() {
    console.log(this.event);
  }

}
