import { Router } from '@angular/router';
import { EventService } from './../../event/event.service';
import { TestBed } from '@angular/core/testing';

import { EventRouteActivatorService } from './event-route-activator.service';

describe('EventRouteActivatorService', () => {
  let service: EventRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: EventService, useClass: EventService }, { provide: Router, useClass: Router }]

    });
    service = TestBed.inject(EventRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
