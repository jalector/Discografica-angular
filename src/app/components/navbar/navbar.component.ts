import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public searchAlbum: string;

  constructor(
    private _toastr: ToastrService,
  ) { }

  public search(): void {
    if (this.searchAlbum == null || this.searchAlbum == "") {

    } else {
    }
    this._toastr.warning("No puedes dejar esta campo vácio", "sdf", {
      tapToDismiss: true,
      closeButton: true,
      timeOut: 5 * 1000 * 30,
      progressBar: true,
    });

  }

}
