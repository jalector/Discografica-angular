import { Component } from '@angular/core';
import { CartService, Album } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  public albums: Album[];

  constructor(
    public _cartService: CartService,
    public _toastrService: ToastrService,
  ) {
    this.albums = this._cartService.items;
  }

  public clear() {
    this._cartService.clear();
    this.albums = [];
    this._toastrService.warning("Tu carrito está limpio");
  }


  public buy() {

  }
}
