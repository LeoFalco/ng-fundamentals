import { EventService } from './../../../../services/event/event.service';
import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'src/app/models/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input()
  eventId: string;

  sessions: Observable<Session[]>;

  mode: 'list' | 'add' = 'list';

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.sessions = this.eventService.getSessions(this.eventId);
  }

  isAddDisabled() {
    return this.mode === 'add';
  }

  toggleMode() {
    console.log('teste');
    this.mode === 'list' ? this.mode = 'add' : this.mode = 'list';
  }

}
