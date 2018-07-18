import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { IEvent, ISession } from '..';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.scss']
})
export class EventsDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  constructor(private eventService: EventService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this._route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession): any {
    // find the max id int for the sessions collection
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    // Increment the amount by one because int begin with 0;
    session.id = nextId + 1;
    // Push the session object into the events session collection
    this.event.sessions.push(session);

    this.eventService.updateEvent(this.event);
    // as we are done adding toggle the session list again
    this.addMode = false;
  }

  removeAddSession() {
    this.addMode = false;
  }
}
