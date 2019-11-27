import { Component } from '@angular/core';
import { CartService, Album } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  public albums: Album[];

  constructor(
    private _cartService: CartService
  ) {
    this.albums = this._cartService.items;
    console.log(this.albums);
  }



}
