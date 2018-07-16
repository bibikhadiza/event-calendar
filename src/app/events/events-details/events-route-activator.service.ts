import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()

export class EventRouteActicator implements CanActivate {
  constructor(private _eventService: EventService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const event = !!this._eventService.getEvent(+route.params['id']);

    if (!event) {
      this.router.navigate(['/404']);
    }
    return event;
  }
}
