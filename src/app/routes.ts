import { EventsListComponent } from './events/events-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import {Routes} from '@angular/router';
import { CreateEventsComponent } from './events/create-events/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActicator } from './events/events-details/events-route-activator.service';
import { EventListResolver } from './events/shared/events-list-resolver.service';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver}, pathMatch: 'full'},
  { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActicator] },
  { path: '404', component: Error404Component},
  { path: '', redirectTo: 'events', pathMatch: 'full'}
];

