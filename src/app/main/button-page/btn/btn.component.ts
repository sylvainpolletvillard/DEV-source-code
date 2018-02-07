import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

@Component({
  selector: 'c3m-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BtnComponent {

  constructor(private elementRef: ElementRef) {}

  /* OnClick Event */
  public OnClick() {
    /* Alert that display ClassName */
    alert('My Class is : ' + this.elementRef.nativeElement.className);
  }

}
