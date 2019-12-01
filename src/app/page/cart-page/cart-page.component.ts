import { Component } from '@angular/core';
import { CartService, Album } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { CustomerService, User } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  public albums: Album[] = [];
  public customers: User[] = [];
  public selectedCustomer: User;

  constructor(
    public _cartService: CartService,
    public _toastrService: ToastrService,
    public _customerService: CustomerService,
  ) {
    this.albums = this._cartService.items;
    this.getCustomers();
  }

  public async getCustomers() {
    this.customers = await this._customerService.getCustomers();
  }

  public clear() {
    this._cartService.clear();
    this._toastrService.warning("Tu carrito está limpio");
  }

  public buy() {
    if (this.selectedCustomer != null) {
      this._cartService.buy(this.selectedCustomer);
      this.albums = [];
    } else {
      this._toastrService.warning("El usuario no puede estar vacío", "Carrito de compras");
    }
  }
}
