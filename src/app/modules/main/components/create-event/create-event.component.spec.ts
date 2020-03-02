import { Credential, User } from './../../../../models/model';
import { AuthService, IAuthService } from './../../../../services/auth/auth.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventComponent } from './create-event.component';


class MockAuthService implements IAuthService {

  login(credential: Credential): User {
    return null
  }

  logout() {

  }

  isAuthenticated() {
    return false
  }

  currentUser() {
    return null
  }

  createUser(credential: Credential, user: User): User {

    return null
  }
}

describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEventComponent],
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
