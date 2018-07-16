import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { usersRoutes } from './user-routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { FormsModule} from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(usersRoutes),
    FormsModule
  ],
  declarations: [
    UserProfileComponent,
    LoginComponent,
  ],
  providers: [
  ]
})

export class UserModule {}
