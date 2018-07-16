import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login(formValues) {
    this._authService.loginUser(formValues.userName, formValues.password);
    this.navigateToIndex();
  }

  navigateToIndex() {
    this._router.navigate(['/events']);
  }

  cancel() {
    this.navigateToIndex();
  }

}
