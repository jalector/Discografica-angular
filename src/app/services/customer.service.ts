import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer.model';
import { GlobalRequestService } from './global-request.service';
import { Util } from '../util';

export { Customer } from '../model/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private _globalRequest: GlobalRequestService,
  ) { }

  /**
  * @author Juda Alector
  * @description Función que da como respuesta un arreglo de `Customer`
  */
  public getCustomers(): Promise<Customer[]> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._globalRequest.api + "/users",
        params: "",
        token: "",
      }).then((data) => {
        good(Util.fromJSONColleciton<Customer>(data, Customer.fromJSON));
      }).catch((error) => {
        bad(error);
      });
    });
  }

  /**
   * @author Juda Alector
   * @description Función que registra una instancia `Customer`
   */
  public register(customer: Customer): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.post({
        url: this._globalRequest.api + "/users",
        body: customer.toJSON(),
        token: null,
      }).then((response) => {
        good(response.message);
      }).catch((error) => {
        bad(error);
      })
    });
  }

  /**
   * @author Juda Alector
   * @description Función que actualiza una instancia `Customer`
   */
  public update(customer: Customer): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.patch({
        url: this._globalRequest.api + `/users/${customer.id.toString()}`,
        body: customer.toJSON(),
        params: "",
      }).then((response) => {
        good(response.message);
      }).catch((error) => {
        bad(error);
      });
    });
  }

  /**
   * @author Juda Alector
   * @description Función que elimina una instancia `Customer`
   */
  public delete(id: string): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.delete({
        url: this._globalRequest.api + `/users/${id}`,
        params: "",
      }).then((response) => {
        good(response.message);
      }).catch((error) => {
        bad(error);
      });
    });
  }

}
