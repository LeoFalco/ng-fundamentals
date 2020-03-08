import { Component, OnInit, Input } from '@angular/core';
import { Session } from 'src/app/models/model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {

  @Input()
  sessions: Session[];


  constructor() { }

  ngOnInit(): void {
  }

}
