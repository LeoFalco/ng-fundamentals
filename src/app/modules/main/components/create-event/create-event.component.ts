import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isDate } from 'util';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  ngFrom: any

  public isDirty = true

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  cancel() {
    console.log('cancel')
    this.router.navigate(['/events'])
  }

  saveEvent(e) {
    console.log('teste')
  }
}



export function canDeactivateCreateEventComponent(createEventComponent: CreateEventComponent) {
  console.log('testando', createEventComponent.isDirty)

  console.log(createEventComponent)

  if (createEventComponent.isDirty) {
    return window.confirm('You not saved yout changes, do you realy want to cancel?')
  }

  return true;
}
