import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DiscPageComponent } from './page/disc-page/disc-page.component';
import { StorePageComponent } from './page/store-page/store-page.component';
import { CustomersPageComponent } from './page/customers-page/customers-page.component';
import { UsersPageComponent } from './page/users-page/users-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { CartPageComponent } from './page/cart-page/cart-page.component';
import { SearchPageComponent } from './page/search-page/search-page.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'disc/:id', component: DiscPageComponent },
    { path: 'store', component: StorePageComponent },
    { path: 'customers', component: CustomersPageComponent },
    { path: 'users', component: UsersPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'cart', component: CartPageComponent },
    { path: 'search/:seachAlbum', component: SearchPageComponent },
];
export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, { useHash: true });