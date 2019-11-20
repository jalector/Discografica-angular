import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { APP_ROUTER_MODULE } from './app.router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiscPageComponent } from './page/disc-page/disc-page.component';
import { SpotifyService } from './services/spotify.service';


import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastNoAnimationModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlbumComponent } from './components/album/album.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { CustomersPageComponent } from './page/customers-page/customers-page.component';
import { UsersPageComponent } from './page/users-page/users-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { StorePageComponent } from './page/store-page/store-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';
import { AlbumListItemComponent } from './components/album-list-item/album-list-item.component';
import { ProductsPageComponent } from './page/products-page/products-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingPageComponent,
    NavbarComponent,
    DiscPageComponent,
    AlbumComponent,
    CartPageComponent,
    CustomersPageComponent,
    StorePageComponent,
    UsersPageComponent,
    AboutPageComponent,
    SearchPageComponent,
    AlbumListItemComponent,
    ProductsPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ToastNoAnimationModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    APP_ROUTER_MODULE
  ],
  providers: [SpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
