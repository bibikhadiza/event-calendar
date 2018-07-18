import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.scss']
})
export class CollapsibleWellComponent implements OnInit {
  @Input() title: string;
  // tslint:disable-next-line:no-inferrable-types
  visible: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toogleContent() {
    this.visible = !this.visible;
  }

}
