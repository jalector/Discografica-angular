import { Component, OnInit } from '@angular/core';
import { CustomerService, User } from 'src/app/services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.css']
})
export class CustomersPageComponent implements OnInit {

  public customers: User[] = [];
  public selectedCustomer: User;

  constructor(
    private _customerService: CustomerService,
    private _toastr: ToastrService
  ) {
    this.getCustomers();
  }


  ngOnInit() {
  }

  /**
   * @author Juda Alector
   * @description Función que llama a traer los clientes de la base de datos
   */
  private async getCustomers() {
    this.customers = await this._customerService.getCustomers();
  }

  /**
   * @author Juda Alector
   * @description Función que verifica sí un usario es nuevo o bien se ha estado
   * editando uno muestra un mensaje de advertencia de la información.
   */
  public makeEditCustomer(customer: User) {
    if (this.selectedCustomer == null) {
      this.selectedCustomer = customer;
    } else {
      this._toastr.warning(
        `No se guardaron los datos de: ${
        this.selectedCustomer.name
        }, cargando datos de${customer.name == null ? "l registro" : " " + customer.name}`,
        "Datos no guardados."
      );
      this.selectedCustomer = customer;
      window.scrollTo(0, 0);
    }
  }

  /**
   * @author Juda Alector
   * @description Función que verifica sí se esta editando un `Customer` antes de dejar crear
   * un nuevo usuario
   */
  public createCustomerQuestion() {
    if (this.selectedCustomer == null) {
      this.selectedCustomer = new User();
      window.scrollTo(0, 0);
    } else {
      this._toastr.warning("No puedes registrar mientras estas editando un cliente");
    }

  }

  /**
   * @author Juda Alector
   * @description Funsión que elimina un `Customer` de la base de datos
   */
  public deleteCustomerQuestion(customer: User) {
    if (this.selectedCustomer == null) {
      this.deleteCustomer();
    } else {
      this._toastr.warning("No puedes eliminar mientras estas editando un cliente");
    }
  }

  /**
   * @author Juda Alector
   * @description Cancela  la edición o registro de un `Customer`
   */
  public cancelCustomerEdit() {
    this.selectedCustomer = null;
  }

  /**
   * @author Juda Alector
   * @description Función para el evento submit del form, que solo se podrá 
   * ejecutar sí el form es válido. 
   */
  public submitCustomer() {
    if (this.selectedCustomer.id == null) {
      this.createCustomer();
    } else {
      this.updateCustomer();
    }
  }

  /**
   * @author Juda Alector
   * @description Función que manda la información a la base de datos, pero antes 
   * verifica si las contraseñas son correctas.
   */
  public async createCustomer() {
    if (this.selectedCustomer.password == this.selectedCustomer.passwordConfirm && this.selectedCustomer.passwordConfirm.length > 8) {
      this.selectedCustomer.userType = "cliente";
      let response: string = await this._customerService.register(this.selectedCustomer);
      this.getCustomers();
      this.selectedCustomer = null;
      this._toastr.success(response, "Registro cliente");
    } else {
      this._toastr.warning("La contraseña no coinciden o no es segura", "Registro cliente");
    }
  }

  /**
   * @author Juda Alector
   * @description Función que manda a actualizar la información de un `Customer` a 
   * la base de datos
   */
  public async updateCustomer() {
    let response: string = await this._customerService.update(this.selectedCustomer);
    this.selectedCustomer = null;
    this._toastr.success(response, "Registro cliente");
  }

  /**
   * @author Juda Alector
   * @description Función que manda a elimanr la información de un `Customer` a 
   * la base de datos
   */
  private async deleteCustomer() {
    let response: string = await this._customerService.delete(this.selectedCustomer.id.toString());
    this.getCustomers();
    this.selectedCustomer = null;
    this._toastr.success(response, "Registro cliente");
  }

}
