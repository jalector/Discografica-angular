import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public searchAlbum: string;

  constructor(
    private _toastr: ToastrService,
    private _router: Router,
    public _cartService: CartService,
    public _sessionService: SessionService,
  ) {

  }

  public search(): void {
    if (this.searchAlbum == null || this.searchAlbum == "") {
      this._toastr.warning("No puedes dejar esta campo vácio", "Concepto de búsqieda", {
        tapToDismiss: true,
      });
    } else {
      this._router.navigateByUrl(`search/${this.searchAlbum}`);
    }

  }

  /**
 * @author Saul Ornelas
 * @description Función para cerrar sesión e ir a login
 */
  public logout(): void {
    this._toastr.success("Sesión cerrada correctamente", "Vuelve pronto :)");
    this._sessionService.logout();
    this._router.navigateByUrl(`/`);
  }

  public onlyAdmin(): boolean {
    return this._sessionService.user.userType == 'administrador';
  }
  public onlyAdminAndEmployee(): boolean {
    return this._sessionService.user.userType == 'administrador' || this._sessionService.user.userType == 'empleado';
  }
}
