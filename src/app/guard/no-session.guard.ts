import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NoSessionGuard implements CanActivate {

  constructor(
    private _sessionService: SessionService,
  ) {

  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let existsUser: boolean = this._sessionService.user == null;

    if (existsUser) {
      window.open("/#/home", "_self");
    }

    return existsUser;
  }

}
