import { Component, OnInit, ViewEncapsulation, Input, AfterViewInit} from '@angular/core';
import { TabsComponent } from '../tabs.component';
import { AppComponent } from '../../../../app.component';

@Component({
  selector: 'c3m-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabComponent implements OnInit, AfterViewInit {

  @Input() tabTitle;
  @Input() isActive: boolean;
  @Input() idTab: number;
  tabID: string;
  panelID: string;


  constructor(tabs: TabsComponent, app: AppComponent) {
    tabs.addTab(this);
    this.idTab = app.randomID();
   }

  ngOnInit() {
    this.tabID = 'tab' + this.idTab;
    this.panelID = 'panel' + this.idTab;
  }

  ngAfterViewInit() {
    this.tabID = 'tab' + this.idTab;
    this.panelID = 'panel' + this.idTab;

  }


}
