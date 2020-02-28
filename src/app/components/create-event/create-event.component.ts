import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  ngFrom: any

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
