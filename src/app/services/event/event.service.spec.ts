import { TestBed } from '@angular/core/testing';

import { EventService } from './event.service';
import { LibModule } from 'angularfire-mock';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[LibModule.forRoot()]
    });
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
