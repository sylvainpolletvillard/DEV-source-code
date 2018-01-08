import {Component, Input, ViewEncapsulation} from '@angular/core';
import {DropdownComponent} from '../dropdown.component';
import {AppComponent} from '../../../../../app.component';

@Component({
  selector: 'c3m-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DropdownItemComponent{

<<<<<<< HEAD
  /* Inputs */
=======
>>>>>>> aa0ead50813120bcc05d3aaf09b43573a06ac7e6
  @Input() name;
  @Input() idItem: number;
  @Input() route;

<<<<<<< HEAD
  /* Dropdown Item Constructor */
=======
>>>>>>> aa0ead50813120bcc05d3aaf09b43573a06ac7e6
    constructor(dropdown: DropdownComponent, app: AppComponent) {
      dropdown.addTab(this);
      this.idItem = app.randomID();
  }

}
