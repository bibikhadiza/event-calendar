import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.scss']
})
export class CreateEventsComponent implements OnInit {
  isDirty = true;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this._router.navigate(['/events']);
  }

}
