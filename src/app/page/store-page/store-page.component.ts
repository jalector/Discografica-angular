import { Component } from '@angular/core';
import { SpotifyService, Album } from 'src/app/services/spotify.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent {

  public search: string;
  public albumSearched: Album[];
  public selectedAlbum: Album;

  public stock: number;
  public price: number;

  constructor(
    private _toastr: ToastrService,
    private _spotifyService: SpotifyService,
    private _sanitazer: DomSanitizer,
    private _albumsService: AlbumsService
  ) {
    this.search = "innervisions";
    this.albumSearched = [];

    this.selectedAlbum = null;
    this.searchAlbum();
  }

  public async searchAlbum() {
    if (this.search == null || this.search.length < 2) {
      this._toastr.warning("El criterio de búsqueda debe ser mayor a 2 carasteres");
    } else {
      this.albumSearched = await this._spotifyService.searchAlbum(this.search, 20);
    }
  }

  public async selectAlbum(album: Album) {
    this.selectedAlbum = album;
  }

  public get previewAlbumURL() {
    return this._sanitazer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/album/" + this.selectedAlbum.id);
  }


  public addStock() {

    this._albumsService.addStock(this.selectedAlbum);
  }
}
