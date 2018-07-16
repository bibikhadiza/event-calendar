import { EventsListComponent } from './events/events-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import {Routes} from '@angular/router';
import { CreateEventsComponent } from './events/create-events/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActicator } from './events/events-details/events-route-activator.service';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventsDetailsComponent, canActivate: [EventRouteActicator] },
  { path: '404', component: Error404Component},
  { path: '', redirectTo: 'events', pathMatch: 'full'}
];

