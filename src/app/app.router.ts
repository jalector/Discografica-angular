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
import { ProductsPageComponent } from './page/products-page/products-page.component';
import { SessionGuard } from './guard/session.guard';
import { NoSessionGuard } from './guard/no-session.guard';


const routes: Routes = [
    { path: '', component: LandingPageComponent, canActivate: [NoSessionGuard] },
    { path: 'home', component: HomePageComponent, canActivate: [SessionGuard] },
    { path: 'disc/:id', component: DiscPageComponent, canActivate: [SessionGuard] },
    { path: 'store', component: StorePageComponent, canActivate: [SessionGuard] },
    { path: 'customers', component: CustomersPageComponent, canActivate: [SessionGuard] },
    { path: 'users', component: UsersPageComponent, canActivate: [SessionGuard] },
    { path: 'about', component: AboutPageComponent, canActivate: [SessionGuard] },
    { path: 'cart', component: CartPageComponent, canActivate: [SessionGuard] },
    { path: 'search/:seachAlbum', component: SearchPageComponent, canActivate: [SessionGuard] },
    { path: 'products', component: ProductsPageComponent, canActivate: [SessionGuard] },
];
export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, { useHash: true });