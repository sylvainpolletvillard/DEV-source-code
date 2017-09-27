import { Component, ViewEncapsulation, Input, ElementRef, AfterViewInit, ViewChildren, QueryList, ChangeDetectorRef, HostListener } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements AfterViewInit {

  @ViewChildren('tabs') tabsElement: QueryList<ElementRef>;

  tabs: TabComponent[] = [];
  isOver: boolean;
  widthBreak: number;
  sizeInit = 0;
  arrayTmp: ElementRef[] = [];
  startIndexActiv = 0;

  /* Gestion du resize pour le breakpoint des tab */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if ( this.tabsElement.last.nativeElement.offsetTop > this.tabsElement.first.nativeElement.offsetTop ) {

              if ( (this.tabsElement.last.nativeElement.offsetTop > this.tabsElement.first.nativeElement.offsetTop) &&  (this.isOver !== true) ) {
                  this.widthBreak = event.target.innerWidth;
                  this.isOver = true;
              }

              if (this.widthBreak) {
                    if ( (event.target.innerWidth > this.widthBreak) && (this.isOver === true) ) {
                    this.isOver = false;
                    }

              } else {
                    this.widthBreak = this.sizeInit;
                      if ( event.target.innerWidth >= this.widthBreak ) {
                        this.isOver = false;
                      }
              }
    } else {
      this.isOver = false;
    }
    this.cdr.detectChanges();
  }

  /* Ajout d'un tab dans le tableau de tab et selection du tab actif */
  addTab(tab: TabComponent) {
    if (this.tabs.length === this.startIndexActiv) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  /* Fermeture des tabs et ouverture du bon tab */
  selectTab(tab: TabComponent) {
    this.tabs.forEach((TabComponent) => {
      TabComponent.isActive = false;
    });
    tab.isActive = true;
    }

  /* Gestion du breakpoint des tab*/
  ngAfterViewInit(): void {

    this.arrayTmp = this.tabsElement.toArray();
    for ( let i = 0; i < this.arrayTmp.length - 1; i ++ ) {
        this.sizeInit = this.arrayTmp[i].nativeElement.clientWidth + this.sizeInit;
    }

    if ( this.tabsElement.last.nativeElement.offsetTop !== this.tabsElement.first.nativeElement.offsetTop ) {
      this.isOver = true;
    } else {
       this.isOver = false;
    }
      this.cdr.detectChanges();
  }


  /* Constructeur d'un tab */
  constructor(private cdr: ChangeDetectorRef) {
  }

}
