import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event.component';
import { routes } from '../../../../routes/routes';

describe('CreateEventComponent', () => {
  let component: CreateEventComponent;
  let fixture: ComponentFixture<CreateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot(routes), FormsModule],
      declarations: [CreateEventComponent],
      providers: []
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
