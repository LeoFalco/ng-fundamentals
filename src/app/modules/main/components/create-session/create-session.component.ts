import { EventService } from './../../../../services/event/event.service';
import { Session } from './../../../../models/model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Input()
  eventId: string;

  @Input()
  session: Session;

  sessionForm: FormGroup;

  saved = new EventEmitter<void>();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.sessionForm = new FormGroup({
      name: new FormControl(this.session?.name, Validators.required),
      presenter: new FormControl(this.session?.presenter, Validators.required),
      duration: new FormControl(this.session?.presenter, Validators.required),
      level: new FormControl(this.session?.level, Validators.required),
      abstract: new FormControl(this.session?.abstract, Validators.required)
    });
  }

  save(formCotnrolValue: Session) {
    this.eventService.mergeSesseion(this.eventId, formCotnrolValue);
    this.saved.emit();
  }
}

