import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class GlobalRequestService {

  /** Apis a las que me voy a conectar */
  public static api: string = "todavianosé";


  /** Token que se usa para la autorización en cada peticion al servidor  */
  private _token: string;

  private set token(value: string) {
    this._token = value;
  }

  private get token() {
    return this._token;
  }


  /** Representa la cantidad de peticiones que estarán haciendo uso de la
   * pantalla de carga */
  private spinnerUse: number;

  constructor(
    private _http: HttpClient,
    private _spinner: NgxSpinnerService,
    private _toastr: ToastrService
  ) {
    this.spinnerUse = 0;
  }


  public logOut() {
    this.token = null;
  }

  /**
   * @author Juda Alector
   * @description Los métodos que están en este archivo están pensados para que
   * se utilicen para todos los servicios que se vayan a usar. Aquí se traeran
   * los toda la información en crudo para que en el servicio que se este ocu-
   * pando haga el resto de mapeo o de funcionalidad. 
   * 
   *  get       : Petición de tipo GET.
   *  post      : Petición de tipo POST.
   *  pach      : Petición de tipo PATCH.
   *  delete    : Peticion de tipo DELETE.
   * 
   *  Los parametros de estos métodos están dados por un objeto, esto en busqueda
   * de que todos los parametros tengan un orden y puedan crecer conforme al tiempo.
   */



  /**
   * @author Juda Alector
   * @description Esta función está pensada para generar sólo una pantalla de
   * Loading para todas las peticiones que se esten realizando al mismo tiempo.
   */
  private showSpinner() {
    if (this.spinnerUse++ == 0) {
      this._spinner.show();
    }
  }

  /**
   * @author Juda Alector
   * @description Esta función está pensada para eliminar la pantalla de loading
   * sólo cuando todas las peticiones hayan terminado su ejecución. 
   */
  private hideSipnner() {
    if (--this.spinnerUse == 0) {
      this._spinner.hide();
    }
  }

  /**
   * @author Juda Alector
   * @description Esta función retorna un machote que se utiliza en la mayoría de 
   * las peticiones. 
   */
  public getHeader(token?: string) {
    let headerOptions = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (token) {
      headerOptions['Authorization'] = this.token;
    }

    return new HttpHeaders(headerOptions);
  }

  /**
   * @author Juda Alector
   * @param params, los parametros para este método estan dados en un objeto
   * para que el orden de agregar los parametros no importen.
   *  
   *        url           :     Dirección a la cual se hace la petición
   * 
   *        body          :     El cuerpo de la petición, es de tipo any de
   *                            tal manera que le puedes enviar objetos o 
   *                            instancias de FormData.
   * 
   *        customHeader  :     Remplazará el machote de this.getHeader() para
   *                            que peticiones especiales puedan ser ejecutadas
   *                            sin conflicto. Tal es el caso de los archivos.
   *                            
   */
  public post(
    params: { url: string, token: string, body?: any, customHeader?: any }
  ): Promise<any> {
    this.showSpinner();
    let promise = new Promise((good, bad) => {
      let postHeaders: HttpHeaders;

      if (params.customHeader) {
        params.customHeader['Authorization'] = this.token;
        postHeaders = new HttpHeaders(params.customHeader);
      } else {
        postHeaders = this.getHeader();
      }

      this._http.post(
        params.url,
        params.body,
        { headers: postHeaders }
      ).toPromise().then((response) => {
        good(response);
        this.hideSipnner();
      }).catch((error) => {
        bad(error);
        this.hideSipnner();
      });
    });

    return promise;
  }

  /**
   * @author Juda Alector
   * @param params, los parametros para este método estan dados en un objeto
   * para que el orden de agregar los parametros no importen.
   *  
   *        url             :   Dirección a la cual se hace la petición
   * 
   *        paramas         :   El cuerpo de la petición, es de tipo any de
   *                            tal manera que le puedes enviar objetos o 
   *                            instancias de FormData.
   * 
   */
  public get(
    params: { url: string, params: string, token: string, customHeader?: any }
  ): Promise<any> {
    this.showSpinner();
    let promise: Promise<any> = new Promise<any>((good, bad) => {

      let postHeaders: HttpHeaders;

      if (params.customHeader) {
        postHeaders = new HttpHeaders(params.customHeader);
      } else {
        postHeaders = this.getHeader(params.token);
      }

      console.log(postHeaders);


      this._http.get(
        params.url + params.params,
        { headers: postHeaders },
      ).toPromise().then((response) => {
        good(response);
        this.hideSipnner();
      }).catch((error) => {
        if (error.status == 401) {
          this._toastr.info(
            "No tienes los suficientes permisos para realizar la acción de lectura",
            params.url
          );
        }
        bad(error);
        this.hideSipnner();
      })
    });

    return promise;
  }

  /**
   * @author Juda Alector
   * @param params, los parametros para este método estan dados en un objeto
   * para que el orden de agregar los parametros no importen.
   *  
   *        url             :   Dirección a la cual se hace la petición
   * 
   *        parmas          :   El cuerpo de la petición, es de tipo any de
   *                            tal manera que le puedes enviar objetos o 
   *                            instancias de FormData.
   * 
   */
  public delete(params: {
    url: string,
    params: string
  }) {
    this.showSpinner();
    let promise: Promise<any> = new Promise<any>((good, bad) => {
      this._http.delete(
        params.url + params.params,
        { headers: this.getHeader() }
      ).toPromise().then((response) => {
        good(response);
        this.hideSipnner();
      }).catch((error) => {
        if (error.status == 401) {
          this._toastr.info(
            "No tienes los suficientes permisos para realizar la acción de eliminar",
            params.url
          );
        }
        this.hideSipnner();
        bad(error);
      })
    });

    return promise;
  }

  /**
   * @author Juda Alector
   * @since Enero 18. 2019
   * @description Función que se utilizará para todas las peticiones tipo patch
   * @param params objeto que recibe obligatoriamente una url (referencia para)
   * la API; y params, que tiene que ver en parámetros de la url. 
   * @return Promesa <any>
   */
  public patch(
    params: { url: string, params: string, body: any, customHeader?: any }
  ): Promise<any> {
    this.showSpinner();
    let promise: Promise<any> = new Promise<any>((good, bad) => {
      let postHeaders: HttpHeaders;

      if (params.customHeader) {
        params.customHeader['Authorization'] = this.token;
        postHeaders = new HttpHeaders(params.customHeader);
      } else {
        postHeaders = this.getHeader();
      }

      this._http.patch(
        params.url + params.params,
        params.body,
        { headers: postHeaders }
      ).toPromise().then((response) => {
        good(response);
        this.hideSipnner();
      }).catch((error) => {
        bad(error);
        this.hideSipnner();
      });
    });

    return promise;
  }

}
