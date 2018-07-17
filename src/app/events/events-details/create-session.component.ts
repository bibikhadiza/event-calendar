import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ISession, restrictedWords } from '..';

@Component({
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})

export class CreateSessionComponent implements OnInit {
  constructor() { }
  newSessionForm: FormGroup;
  name = new FormControl;
  presenter = new FormControl;
  duration = new FormControl;
  level = new FormControl;
  abstract = new FormControl;

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['test', 'function'])]);

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract,
    });
  }

  saveSession(formValues) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: [],
    };

    console.log(this.newSessionForm.controls);
  }

}


