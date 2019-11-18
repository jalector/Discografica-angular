import { Component, OnInit } from '@angular/core';
import { SpotifyService, Album } from 'src/app/services/spotify.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {

  public search: string;
  public albumSearched: Album[];
  public selectedAlbum: Album;

  constructor(
    private _toastr: ToastrService,
    private _spotifyService: SpotifyService,
  ) {
    this.search = "re";
    this.albumSearched = [];

    this.selectedAlbum = null;
    this.searchAlbum();
  }

  public async searchAlbum() {
    if (this.search == null || this.search.length < 2) {
      this._toastr.warning("El criterio de búsqueda debe ser mayor a 2 carasteres");
    } else {
      this.albumSearched = await this._spotifyService.searchAlbum(this.search, 20);
      console.log(this.albumSearched);
    }
  }

}
