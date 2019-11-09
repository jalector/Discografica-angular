import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { APP_ROUTER_MODULE } from './app.router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiscComponent } from './components/disc/disc.component';
import { DiscPageComponent } from './page/disc-page/disc-page.component';
import { SpotifyService } from './services/spotify.service';


import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent,
    NavbarComponent,
    DiscComponent,
    DiscPageComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,

    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    APP_ROUTER_MODULE
  ],
  providers: [SpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
