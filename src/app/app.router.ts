import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './page/landing-page/landing-page.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
];
export const APP_ROUTER_MODULE = RouterModule.forRoot(routes);