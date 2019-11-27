import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SessionService } from '../services/session.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor(
    private _sessionService: SessionService,
    private _toastrService: ToastrService
  ) {

  }

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let can: boolean = this._sessionService.user != null;

    if (!can) {
      this._toastrService.warning("No has iniciado sesión", "Discográfica");
      window.open("/", "_self");
    }

    return can;
  }

}
