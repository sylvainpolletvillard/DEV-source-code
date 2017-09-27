import { Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  menuMobile = false;

  constructor() { }

  ngOnInit() {
  }

  public ToggleMenuBurger() {
      if (this.menuMobile) {
          this.menuMobile = false;
      } else if (!this.menuMobile) {
        this.menuMobile = true;
      }
  }

}
