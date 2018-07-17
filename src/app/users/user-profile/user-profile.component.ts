import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  profileForm: FormGroup;
  lastName: FormControl;
  firstName: FormControl;

  constructor(private _auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl(this._auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this._auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  cancel() {
    this.router.navigate(['/events']);
  }


  saveProfile(formValues) {
    if ( this.profileForm.valid ) {
      this._auth.updateUser(formValues);
      this.router.navigate(['/events']);
    }
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.touched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.touched;
  }

}
