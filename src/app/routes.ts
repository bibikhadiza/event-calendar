import {Routes} from '@angular/router';
import { CreateEventsComponent } from './events/create-events/create-events.component';
import { Error404Component } from './errors/404.component';

import {
  EventsListComponent,
  EventsDetailsComponent,
  EventRouteActicator,
  EventListResolver,
  CreateSessionComponent

} from './events/index';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver}, pathMatch: 'full'},
  { path: 'events/new', component: CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActicator] },
  { path: '404', component: Error404Component},
  { path: 'user', loadChildren: './users/users.module#UserModule'},
  { path: '', redirectTo: 'events', pathMatch: 'full'}
];

