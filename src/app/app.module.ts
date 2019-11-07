import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { APP_ROUTER_MODULE } from './app.router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTER_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
