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
        }, cargando datos de${customer.nombre == null ? "l registro": " " + customer.nombre}`,
        "Datos no guardados."
      );
      this.selectedCustomer = customer;
      window.scrollTo(0,0);
    }
  }
  
  public createCustomerQuestion(){
    if(this.selectedCustomer == null){
      this.selectedCustomer = {
        id: null,
        nombre: null,
        apellidoPaterno: null,
        apellidoMaterno: null,
        telefono: null,
        direccion: null,
        correo: null,
        rol: null,
        fechaAlta: null,
        fechaActualizadon: null,
      };
      window.scrollTo(0,0);
    }else{
      this._toastr.warning("No puedes registrar mientras estas editando un cliente");
    }

  }

  public deleteCustomerQuestion(customer: Customer) {
    if (this.selectedCustomer == null) {
      this.deleteCustomer();
    } else {
      this._toastr.warning("No puedes eliminar mientras estas editando un cliente");
    }
  }

  public cancelCustomerEdit(){
    this.selectedCustomer = null;
  }

  public createCustomer(){
    this._toastr.error("No supported", "Lo siento mijo");
  }

  private deleteCustomer() {
    this._toastr.error("No supported", "Lo siento mijo");
  }

}
