import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './sub/top-bar/top-bar.component';
import { HeaderComponent } from './sub/header/header.component';
import { HeroComponent } from './sub/hero/hero.component';
import { AboutComponent } from './page/about/about.component';
import { WhyUsComponent } from './page/why-us/why-us.component';
import { ClientsComponent } from './page/clients/clients.component';
import { ServicesComponent } from './page/services/services.component';
import { CallToActionComponent } from './page/call-to-action/call-to-action.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { PricingComponent } from './page/pricing/pricing.component';
import { TeamComponent } from './page/team/team.component';
import { ContactComponent } from './page/contact/contact.component';
import { FooterComponent } from './sub/footer/footer.component';
import { GridComponent } from './page/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    WhyUsComponent,
    ClientsComponent,
    ServicesComponent,
    CallToActionComponent,
    PortfolioComponent,
    PricingComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
