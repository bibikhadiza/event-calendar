import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  EventsDetailsComponent,
  CreateEventsComponent,
  EventRouteActicator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AuthService } from './users/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavigationComponent,
    EventsDetailsComponent,
    CreateEventsComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActicator,
    EventListResolver,
    AuthService,
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
