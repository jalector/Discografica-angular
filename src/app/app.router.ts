import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { HomePageComponent } from './page/home-page/home-page.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomePageComponent },

];
export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, { useHash: true });