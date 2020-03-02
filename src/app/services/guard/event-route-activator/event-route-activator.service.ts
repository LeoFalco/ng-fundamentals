import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { EventService } from './../../event/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(routeSnapshot: ActivatedRouteSnapshot) {

    const eventExists = !!this.eventService.getEvent(routeSnapshot.paramMap.get('id'));

    console.log(eventExists);
    if (!eventExists) {
      this.router.navigate(['not-found']);
    }

    return eventExists;
  }
}
