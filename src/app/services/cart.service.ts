import { Injectable } from '@angular/core';
import { Album } from './albums.service';
export { Album } from './albums.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items: Album[] = [];
  private key: string = "CART_KEY";

  public set items(albums: Album[]) {
    let albumsString = albums.map<String>((album: Album) => {
      return album.toJSON();
    });

    sessionStorage.setItem(this.key, JSON.stringify(albumsString));
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

  public add(album: Album): void {
    let found: boolean = false;
    for (let i = 0, e = this.items.length; i < e; i++) {
      const element = this._items[i];

      if (element.id === album.id) {
        element.quantity += album.quantity;
        found = true;
        break;
      }
    }

    if (!found) {
      this._items.push(album);
    }

    this.items = this._items;
  }

  public remove(album: Album): void {
    let i: number = -1;

    for (let i = 0, e = this.items.length; i < e; i++) {
      const element = this._items[i];

      if (element.id === album.id) {
        element.quantity -= album.quantity;
        i = i;
        break;
      }
    }

    if (i != -1) {
      this._items.splice(i, 1);
    }
  }
}
