import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './../../auth/auth.service';
/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { UserProfileActivatorService } from './user-profile-activator.service';
import { InjectionToken } from '@angular/core';

describe('Service: UserProfileActivator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserProfileActivatorService, AuthService, AngularFireAuth, InjectionToken]
    });
  });

  it('should ...', inject([UserProfileActivatorService], (service: UserProfileActivatorService) => {
    expect(service).toBeTruthy();
  }));
});
