import { EventService } from './../event/event.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(routeSnapshot: ActivatedRouteSnapshot) {

    let eventExists = !!this.eventService.getEvent(+routeSnapshot.paramMap.get('id'))

    console.log(eventExists)
    if (!eventExists) {
      this.router.navigate(['/404'])
    }

    return eventExists
  }
}
