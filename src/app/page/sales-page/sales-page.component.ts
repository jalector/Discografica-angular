import { Component, OnInit } from '@angular/core';
import { CartService, Sale } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {

  public sales: Sale[] = [];

  constructor(
    private _cartService: CartService,
  ) {
    this.getSales();
  }

  ngOnInit() {
  }

  public async getSales() {
    this.sales = await this._cartService.getSales();
    console.log(this.sales);
  }
}
