import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { AccordionComponent } from './main/accordion-page/accordion/accordion.component';
import { AccordionItemComponent } from './main/accordion-page/accordion/accordion-item/accordion-item.component';
import { RouterModule, Routes } from '@angular/router';
import { BtnComponent } from './main/button-page/btn/btn.component';
import { TabsComponent } from './main/tabs-page/tabs/tabs.component';
import { TabComponent } from './main/tabs-page/tabs/tab/tab.component';
import { ButtonPageComponent } from './main/button-page/button-page.component';
import { TabsPageComponent } from './main/tabs-page/tabs-page.component';
import { AccordionPageComponent } from './main/accordion-page/accordion-page.component';
import { MenuComponent } from './header/menu/menu.component';
import { MenuItemComponent} from './header/menu/menu-item/menu-item.component';
import { BtnFileComponent } from './main/button-page/btn-file/btn-file.component';
import { BtnSubmitComponent } from './main/button-page/btn-submit/btn-submit.component';
import { CarouselPageComponent } from './main/carousel-page/carousel-page.component';
import { ModalPageComponent } from './main/modal-page/modal-page.component';
import { ModalComponent } from './main/modal-page/modal/modal.component';
import { ModalAlertComponent } from './main/modal-page/modal-alert/modal-alert.component';

export const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent, data: { title: 'Accueil' } },
  { path: 'button', component: ButtonPageComponent, data: { title: 'Button' } },
  { path: 'tabs', component: TabsPageComponent, data: { title: 'Tabs' } },
  { path: 'accordion', component: AccordionPageComponent, data: { title: 'Accordion' } },
  { path: 'modal', component: ModalPageComponent, data: { title: 'modal' } },
  { path: 'carousel', component: CarouselPageComponent, data: { title: 'carousel' } },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  //  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AccueilComponent,
    AccordionComponent,
    AccordionItemComponent,
    BtnComponent,
    TabsComponent,
    TabComponent,
    ButtonPageComponent,
    TabsPageComponent,
    AccordionPageComponent,
    MenuComponent,
    MenuItemComponent,
    BtnFileComponent,
    BtnSubmitComponent,
    CarouselPageComponent,
    ModalPageComponent,
    ModalComponent,
    ModalAlertComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
