import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  public email: String;
  public password: String;

  constructor(
    private _userService: UserService,
    private _sessionService: SessionService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  /**
* @author Saul Ornelas
* @description Función para iniciar sesión e ir a la página de inicio
*/
  public async login(email: String, password: String) {
    if (email === undefined || email === "" || password === undefined || password === "") {
      this._toastr.error("No supported", "Datos incompletos");
    } else {
      let response = await this._userService.login(email, password);

      if (response.id) {
        this._sessionService.user = response;
        this._router.navigateByUrl(`home`);
      } else {
        this._toastr.error("No supported", "Usuario o contraseña incorrectos");
      }
    }
  }

}
