import { Injectable } from '@angular/core';
import { User } from '../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user: User;

  constructor() { }

  get user(): User {
    if (this._user == null) {
      let json = sessionStorage.getItem("user");
      if (json != null) {
        this._user = User.fromJSON(JSON.parse(json));
      }
    }
    return this._user;
  }

  set user(user: User) {
    this._user = user;
    sessionStorage.setItem("user", user.toJSON());
  }

  public logout() {
    this._user = null;
    sessionStorage.clear();
  }


}
