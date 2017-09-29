import { Component, ViewEncapsulation } from '@angular/core';
import { TabsComponent } from '../../tabs-page/tabs/tabs.component';

@Component({
  selector: 'c3m-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {

  onClick() {
    alert('execute action');
  }

}
