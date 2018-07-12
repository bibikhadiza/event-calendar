import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-events-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  styleUrls: ['./events-thumbnail.component.scss'],
})


export class EventsThumbnailComponent {
  @Input() event: any;

}
