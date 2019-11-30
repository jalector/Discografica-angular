import { Injectable } from '@angular/core';
import { Album } from './albums.service';
import { ToastrService } from 'ngx-toastr';
import { GlobalRequestService } from './global-request.service';
import { SessionService } from './session.service';
import { Sale } from '../model/Sale.model';
import { Util } from '../util';

export { Album } from './albums.service';
export { Sale } from '../model/Sale.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items: Album[] = [];
  private key: string = "CART_KEY";

  constructor(
    private _toastrService: ToastrService,
    private _globalRequest: GlobalRequestService,
    private _sessionService: SessionService,
  ) {

    console.log(this.items);
  }

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

  public get getTotal() {
    let amount: number = 0;

    this._items.forEach((album: Album) => {
      amount += album.quantity * album.price;
    });
    return amount;
  }

  public get length() {
    return this.items.length;
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
          this._toastrService.success(`${album.title}, ${album.quantity} elementos`, "Album agregado correctamente.");
        }
        found = true;
        break;
      }
    }

    if (!found) {
      this._items.push(album);
      this._toastrService.success(`${album.title}`, "Album agregado correctamente.");
    }

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
    this._items = [];
    sessionStorage.removeItem(this.key);
  }

  public cartToSave() {
    return {
      client_id: 26,
      user_id: this._sessionService.user.id,
      albums: this._items.map<any>((album: Album) => {
        return {
          disk_id: album.id,
          quantity: album.quantity,
          price: album.price,
        };
      })
    };
  }

  public getSales(): Promise<Sale[]> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._globalRequest.disks_and_sales + "/get_sales",
        params: "",
        token: ""
      }).then((response) => {
        good(Util.fromJSONColleciton<Sale>(response, Sale.fromJSON));
      }).catch((error) => {
        bad(error);
      });
    });
  }

  public buy() {
    return new Promise((good, bad) => {
      this._globalRequest.post({
        url: this._globalRequest.disks_and_sales + "/sales",
        body: JSON.stringify(this.cartToSave()),
        token: ""
      }).then((response) => {
        this._toastrService.success("Tu compra fue realizada con éxito");
        this.clear();
      }).catch((error) => {
        bad(error);
      });
    });
  }

}
