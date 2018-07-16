import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
})


export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private _eventService: EventService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.events = this._eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }


}
