import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail/events-thumnnail.component';
import { NavigationComponent } from './navigation/navigation.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventsComponent } from './events/create-events/create-events.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActicator } from './events/events-details/events-route-activator.service';
import { EventListResolver } from './events/shared/events-list-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavigationComponent,
    EventsDetailsComponent,
    CreateEventsComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActicator,
    EventListResolver,
    { provide: 'canDeactivateCreateEvent', useValue: canDirtyState},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function canDirtyState(component: CreateEventsComponent) {
  if ( component.isDirty ) {
    return window.confirm('You have not saved your work. Are you sure you want to continue?');
  }
  return true;
}
