import { Component, OnInit } from '@angular/core';
import { UserService, User } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  public users: User[] = [];
  public selectedUser: User;

  constructor(
    private _userService: UserService,
    private _toastr: ToastrService
  ) {
    this.getUsers();
  }


  ngOnInit() {
  }

  /**
   * @author Rafa Paniagua
   * @description Función que llama a traer los "usuarios" (empleados) de la base de datos
   */
  private async getUsers() {
    this.users = await this._userService.getUsers();
  }

  /**
   * @author Rafa Paniagua
   * @description Función que verifica sí un usario es nuevo o bien se ha estado
   * editando uno muestra un mensaje de advertencia de la información.
   */
  public makeEditUser(user: User) {
    if (this.selectedUser == null) {
      this.selectedUser = user;
    } else {
      this._toastr.warning(
        `No se guardaron los datos de: ${
        this.selectedUser.name
        }, cargando datos de${user.name == null ? "l registro" : " " + user.name}`,
        "Datos no guardados."
      );
      this.selectedUser = user;
      window.scrollTo(0, 0);
    }
  }

  /**
   * @author Rafa Paniagua
   * @description Función que verifica sí se esta editando un `User` (empleado) antes de dejar crear
   * un nuevo usuario
   */
  public createUserQuestion() {
    if (this.selectedUser == null) {
      this.selectedUser = new User();
      window.scrollTo(0, 0);
    } else {
      this._toastr.warning("No puedes registrar mientras estas editando un usuario");
    }

  }

  /**
   * @author Rafa Paniagua
   * @description Función que elimina un `User` (empleado) de la base de datos
   */
  public deleteUserQuestion(user: User) {
    if (this.selectedUser == null) {
      this.deleteUser();
    } else {
      this._toastr.warning("No puedes eliminar mientras estas editando un usuario");
    }
  }

  /**
   * @author Rafa Paniagua
   * @description Cancela  la edición o registro de un `User` (empleado)
   */
  public cancelUserEdit() {
    this.selectedUser = null;
  }

  /**
   * @author Rafa Paniagua
   * @description Función para el evento submit del form, que solo se podrá
   * ejecutar sí el form es válido.
   */
  public submitUser() {
    if (this.selectedUser.id == null) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  /**
   * @author Rafa Paniagua
   * @description Función que manda la información a la base de datos, pero antes
   * verifica si las contraseñas son correctas.
   */
  public async createUser() {
    if (this.selectedUser.password == this.selectedUser.passwordConfirm && this.selectedUser.passwordConfirm.length > 8) {
      let response: string = await this._userService.register(this.selectedUser);
      this.getUsers();
      this.selectedUser = null;
      this._toastr.success(response, "Registro usuario");
    } else {
      this._toastr.warning("Las contraseñas no coinciden o no es segura", "Registro usuario");
    }
  }

  /**
   * @author Rafa Paniagua
   * @description Función que manda a actualizar la información de un `User` (empleado) a
   * la base de datos
   */
  public async updateUser() {
    let response: string = await this._userService.update(this.selectedUser);
    this.selectedUser = null;
    this._toastr.success(response, "Registro usuario");
  }

  /**
   * @author Rafa Paniagua
   * @description Función que manda a elimanr la información de un `User` (empleado) a
   * la base de datos
   */
  private async deleteUser() {
    let response: string = await this._userService.delete(this.selectedUser.id.toString());
    this.getUsers();
    this.selectedUser = null;
    this._toastr.success(response, "Registro usuario");
  }

}
