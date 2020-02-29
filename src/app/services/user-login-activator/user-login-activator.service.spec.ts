/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserLoginActivatorService } from './user-login-activator.service';

describe('Service: UserProfileActivator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserLoginActivatorService]
    });
  });

  it('should ...', inject([UserLoginActivatorService], (service: UserLoginActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
