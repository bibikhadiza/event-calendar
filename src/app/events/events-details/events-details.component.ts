import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { IEvent } from '..';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {
  event: IEvent;

  constructor(private eventService: EventService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this._route.snapshot.params['id']);
  }

}
