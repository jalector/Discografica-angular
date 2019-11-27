import { Injectable } from '@angular/core';
import { User } from '../model/User.model';
import { GlobalRequestService } from './global-request.service';
import { Util } from '../util';

export { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _globalRequest: GlobalRequestService,
  ) { }

  /**
  * @author Rafa Paniagua
  * @description Función que da como respuesta un arreglo de `User`
  */
  public getUsers(): Promise<User[]> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._globalRequest.users + "/get_employees",
        params: "",
        token: "",
      }).then((data) => {
        good(Util.fromJSONColleciton<User>(data, User.fromJSON));
      }).catch((error) => {
        bad(error);
      });
    });
  }

  /**
   * @author Rafa Paniagua
   * @description Función que registra una instancia `User`
   */
  public register(user: User): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.post({
        url: this._globalRequest.users + "/users",
        body: user.toJSON(),
        token: null,
      }).then((response) => {
        good(response.message);
      }).catch((error) => {
        bad(error);
      })
    });
  }

  /**
   * @author Rafa Paniagua
   * @description Función que actualiza una instancia `User`
   */
  public update(user: User): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.patch({
        url: this._globalRequest.users + `/users/${user.id.toString()}`,
        body: user.toJSON(),
        params: "",
      }).then((response) => {
        good(response.message);
      }).catch((error) => {
        bad(error);
      });
    });
  }

  /**
   * @author Rafa Paniagua
   * @description Función que elimina una instancia `User`
   */
  public delete(id: string): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.delete({
        url: this._globalRequest.users + `/users/${id}`,
        params: "",
      }).then((response) => {
        good(response.message);
      }).catch((error) => {
        bad(error);
      });
    });
  }

  /**
   * @author Saul Ornelas
   * @description Función para iniciar sesión
   */
  public login(email: String, password: String): Promise<User> {
    return new Promise((good, bad) => {
      this._globalRequest.post({
        url: this._globalRequest.users + "/login",
        body: `{"email": "${email}","password": "${password}"}`,
        token: null
      }).then((response) => {
        good(User.fromJSON(response));
      }).catch((error) => {
        bad(error);
      })
    });
  }

}
