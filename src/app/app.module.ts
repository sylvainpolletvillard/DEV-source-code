import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { AccordionComponent } from './header/accordion/accordion.component';
import { AccordionItemComponent } from './header/accordion/accordion-item/accordion-item.component';
import { RouterModule, Routes } from '@angular/router';
import { ButtonComponent } from './main/button-page/button/button.component';
import { TabsComponent } from './main/tabs-page/tabs/tabs.component';
import { TabComponent } from './main/tabs-page/tabs/tab/tab.component';
import { ButtonPageComponent } from './main/button-page/button-page.component';
import { TabsPageComponent } from './main/tabs-page/tabs-page.component';


export const appRoutes: Routes = [
  { path: 'accueil', component: AccueilComponent, data: { title: 'Accueil' } },
  { path: 'button', component: ButtonPageComponent, data: { title: 'Button' } },
  { path: 'tabs', component: TabsPageComponent, data: { title: 'Tabs' } },
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
    ButtonComponent,
    TabsComponent,
    TabComponent,
    ButtonPageComponent,
    TabsPageComponent,
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
