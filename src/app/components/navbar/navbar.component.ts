import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public searchAlbum: string;

  constructor(
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
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
    this._userService.logout();
    this._toastr.success("Success", "Sesión cerrada correctamente");
    this._router.navigateByUrl(`/`);
  }

}
