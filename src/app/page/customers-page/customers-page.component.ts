import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  public customers: Customer[];
  public selectedCustomer: Customer;

  constructor(
    private _customerService: CustomerService,
    private _toastr: ToastrService
  ) {
    this.getCustomers();
  }


  ngOnInit() {
  }

  private async getCustomers() {
    this.customers = await this._customerService.getCustomers();
  }

  public makeEditCustomer(customer: Customer) {
    if (this.selectedCustomer == null) {
      this.selectedCustomer = customer;
    } else {
      this._toastr.warning(
        `No se guardaron los datos de: ${
        this.selectedCustomer.nombre
        }, cargando datos de ${customer.nombre}`,
        "Datos no guardados."
      );

      this.selectedCustomer = customer;
    }
  }

  public deleteCustomerQuestion(customer: Customer) {
    if (this.selectedCustomer == null) {
      this.deleteCustomer();
    } else {
      this._toastr.warning("No puedes eliminar mientras estas editando un cliente");
    }
  }

  private deleteCustomer() {
    this._toastr.error("No supported", "Lo siento mijo");
  }

}
