import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'c3m-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarPageComponent implements OnInit {

  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    const subComp = ['navbar-item'];
    this.app.codeSnippets(subComp);
  }
}
