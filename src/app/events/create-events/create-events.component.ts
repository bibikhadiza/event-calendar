import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '..';



@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.scss']
})
export class CreateEventsComponent implements OnInit {
  isDirty = true;
  newEvent;
  constructor(private _router: Router, private eventService: EventService) { }

  ngOnInit() {}

  cancel() {
    this._router.navigate(['/events']);
  }

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this._router.navigate(['/events']);
  }

}
