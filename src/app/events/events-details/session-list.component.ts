import { Component, Input } from '@angular/core';
import { ISession } from '..';


@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent {
  @Input() sessions: ISession[];


}
