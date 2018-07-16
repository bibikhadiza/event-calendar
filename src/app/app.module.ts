import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventsDetailsComponent,
  CreateEventsComponent,
  EventRouteActicator,
  EventListResolver

} from './events/index';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavigationComponent,
    EventsDetailsComponent,
    CreateEventsComponent,
    Error404Component,
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
