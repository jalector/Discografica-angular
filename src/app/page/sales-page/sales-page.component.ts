import { Component, OnInit } from '@angular/core';
import { CartService, Sale } from 'src/app/services/cart.service';
import { User } from 'src/app/model/User.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {

  public sales: Sale[] = [];
  public customers: any = {};

  constructor(
    private _cartService: CartService,
    private _customerService: CustomerService,
  ) {

    this.getInfo();
  }

  ngOnInit() {
  }


  public async getInfo() {
    let users: User[] = await this._customerService.getCustomers();
    users.forEach((user: User) => {
      this.customers[user.id] = user.name + " " + user.lastname;
    });

    this.sales = await this._cartService.getSales();
  }


}
