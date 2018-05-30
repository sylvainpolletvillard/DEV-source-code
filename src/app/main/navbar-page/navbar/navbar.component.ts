import {
  Component,
  ViewEncapsulation,
  Input,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  HostListener,
  OnInit
} from "@angular/core";

@Component({
  selector: "c3m-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements AfterViewInit {
  // Inputs
  @Input() isOpen = false;

  // Variables
  navItems;
  widthBreak: number;
  sizeInit = 0;
  isOver = false;

  /* constructor Nav */
  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    // Nav Items
    this.navItems = document.querySelectorAll("c3m-navbar li");

    for ( let i = 0; i < this.navItems.length - 1; i ++ ) {
        this.sizeInit = this.navItems[i].nativeElement.clientWidth + this.sizeInit;
    }

    if ( this.navItems[this.navItems.length-1].offsetTop !== this.navItems[0].offsetTop ) {
      this.isOver = true;
    } else {
       this.isOver = false;
    }
      this.cdr.detectChanges();

  }

  /* Resize breakpoint nav */
  @HostListener("window:resize", ["$event"])
  onResize(event) {

    /* TEST */
    console.log("ul : " + this.navItems[1].offsetTop,"button : " +  this.navItems[0].offsetTop);


    if (this.navItems[this.navItems.length-1].offsetTop > this.navItems[0].offsetTop ) {

      if (
        this.navItems[this.navItems.length-1].offsetTop > this.navItems[0].offsetTop &&
        this.isOver !== true
      ) {
        this.widthBreak = event.target.innerWidth;
        this.isOver = true;
      }

      if (this.widthBreak) {
        if (event.target.innerWidth > this.widthBreak && this.isOver === true) {
          this.isOver = false;
        }
      } else {
        this.widthBreak = this.sizeInit;
        if (event.target.innerWidth >= this.widthBreak) {
          this.isOver = false;
        }
      }
    } else {
      this.isOver = false;
    }
    this.cdr.detectChanges();
  }

  /* open Container's Link */
  toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
    } else if (this.isOpen) {
      this.isOpen = false;
    }
  }
}
