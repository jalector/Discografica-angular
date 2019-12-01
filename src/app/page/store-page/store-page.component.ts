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

  public albumSearched: Album[];
  public albums: Album[];

  public search: string;
  public selectedAlbum: Album;


  constructor(
    private _toastr: ToastrService,
    private _spotifyService: SpotifyService,
    private _sanitazer: DomSanitizer,
    private _albumsService: AlbumsService
  ) {
    this.search = "innervisions";
    this.albumSearched = [];
    this.albums = [];

    this.selectedAlbum = null;
    this.searchAlbum();
    this.getAlbums();
  }

  public async getAlbums() {
    this.albums = await this._albumsService.getAllAlbums();
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
    window.scrollTo(0, 0);
  }

  public get previewAlbumURL() {
    return this._sanitazer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/album/" + this.selectedAlbum.id_album);
  }

  public async updateStock() {

  }

  public async addStock() {
    if (this.selectedAlbum.price != null && this.selectedAlbum.stock != null) {
      let respone: string = await this._albumsService.addStock(this.selectedAlbum);
      this.selectedAlbum = null;
      this.getAlbums();
      this._toastr.success(respone, "Registro almacén");

    } else {
      this._toastr.error("Los campos del album no pueden ir vacíos.", "Registro almacén");
    }
  }

  private async deleteAlbum() {
    let response: string = await this._albumsService.delete(this.selectedAlbum.id.toString());
    this.selectedAlbum = null;
    this.getAlbums();
    this._toastr.success(response, "Registro album");
  }

}
