import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'c3m-dropdown-page',
  templateUrl: './dropdown-page.component.html',
  styleUrls: ['./dropdown-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
