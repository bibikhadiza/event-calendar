import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';
import { IEvent } from '.';
import { Observable } from 'rxjs';

@Injectable()

export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) { }

  resolve( ): Observable<IEvent[]> {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
