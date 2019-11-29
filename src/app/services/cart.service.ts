import { Injectable } from '@angular/core';
import { Album } from './albums.service';
import { ToastrService } from 'ngx-toastr';
export { Album } from './albums.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items: Album[] = [];
  private key: string = "CART_KEY";

  constructor(
    private _toastrService: ToastrService,
  ) { }

  public set items(albums: Album[]) {
    this._items = albums;
    this.save(albums);
  }

  public get items(): Album[] {
    if (this._items == null || this._items.length == 0 || this._items[0].id == undefined) {
      let raw: string = sessionStorage.getItem(this.key);

      if (raw != null) {
        let rawAlbums: any[] = JSON.parse(raw);

        this._items = rawAlbums.map<Album>((album: string, index: number) => {
          return Album.fromJSON(JSON.parse(album));
        });
      } else {
        this._items = [];
      }
    }

    return this._items;
  }

  public save(albums: Album[]) {
    sessionStorage.setItem(this.key, JSON.stringify(albums));
  }

  public add(album: Album): void {
    let found: boolean = false;
    for (let i = 0, e = this.items.length; i < e; i++) {
      let element = this._items[i];

      if (element.id === album.id) {
        if (element.quantity == element.stock) {
          this._toastrService.error("Ya no quedan más en stock", album.title);
        } else {
          element.quantity++;
          this._toastrService.success("Album agregado correctamente. " + element.quantity + " elementos.", album.title);
        }
        found = true;
        break;
      }
    }

    if (!found) {
      this._items.push(album);
    }

    console.log(this._items);
    this.save(this._items);
  }

  public remove(album: Album): void {
    let toDelete: number = -1;

    for (let i = 0, e = this.items.length; i < e; i++) {
      let element = this._items[i];

      if (element.id === album.id) {
        if (--element.quantity == 0) toDelete = i;
        break;
      }
    }

    if (toDelete != -1) {
      this._toastrService.info("Album eliminado", this._items[toDelete].title)
      this._items.splice(toDelete, 1);
    }

    if (this._items.length == 0) {
      this.clear();
    } else {
      this.save(this.items);
    }
  }

  public clear() {
    sessionStorage.removeItem(this.key);
  }
}
