import { Component, ViewEncapsulation, Input, OnChanges, SimpleChanges, OnDestroy, AfterViewInit, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion.component';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionItemComponent implements OnDestroy, OnChanges, AfterViewInit, OnInit {

  @Input() nameButton: string;
  @Input() urlImage: string;
  @Input() isOpen: boolean;
  @Input() index: number;
  tabID: string;
  panelID: string;

  /* Par defaut on ajoute l'élément dans l'accordion */
  constructor(private accordion: AccordionComponent) {
    this.accordion.addGroup(this);
  }

  /* Fonction permettant de retirer l'élément de l'accordion */
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }

  /* Fonction permettant de savoir */
  ngOnChanges(changes: SimpleChanges) {
    for (const change in changes) {
      if (changes.hasOwnProperty(change)) {
        const changedProp = changes[change];

        if (!changedProp.isFirstChange()) {
          this.accordion.groups[this.index + 1].toggleOpen();
        }
      }
    }
  }

  ngOnInit() {
    this.tabID = 'tab' + this.index;
    this.panelID = 'panel' + this.index;
  }
  ngAfterViewInit() {
    this.tabID = 'tab' + this.index;
    this.panelID = 'panel' + this.index;
  }


  /* Ouvre lélément de l'accordion */
  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.accordion.closeOthers(this);
    } else if (this.isOpen) {
      this.accordion.closeAll(this);
    }
  }
}
