import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

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

}
