/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserProfileActivatorService } from './user-profile-activator.service';

describe('Service: UserProfileActivator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileActivatorService]
    });
  });

  it('should ...', inject([UserProfileActivatorService], (service: UserProfileActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
