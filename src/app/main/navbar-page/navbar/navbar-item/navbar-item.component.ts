import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'c3m-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarItemComponent implements OnInit {

  @Input() title: string;
  @Input() isActive: boolean;
  constructor() { }

  ngOnInit() {
  }


}
