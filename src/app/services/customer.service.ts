import { Injectable } from '@angular/core';
import { Customer } from '../Model/Customer.model';
import { GlobalRequestService } from './global-request.service';
export { Customer } from '../Model/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [
    {
      id: 1,
      nombre: "Miguel",
      apellidoPaterno: "Herrero",
      apellidoMaterno: "materno",
      telefono: "959-892-532",
      direccion: "Spain, Región de Murcia",
      correo: "miguel.herrero@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Andrea",
      apellidoPaterno: "Leroux",
      apellidoMaterno: "materno",
      telefono: "076 839 72 12",
      direccion: "Switzerland, Valais",
      correo: "andrea.leroux@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Hans",
      apellidoPaterno: "Fritsche",
      apellidoMaterno: "materno",
      telefono: "0858-5315770",
      direccion: "Germany, Rheinland-Pfalz",
      correo: "hans-bernd.fritsche@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Hella",
      apellidoPaterno: "Lehnert",
      apellidoMaterno: "materno",
      telefono: "0737-0876164",
      direccion: "Germany, Baden-Württemberg",
      correo: "hella.lehnert@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Ethan",
      apellidoPaterno: "Harris",
      apellidoMaterno: "materno",
      telefono: "(986)-980-4481",
      direccion: "New Zealand, Taranaki",
      correo: "ethan.harris@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Nazife",
      apellidoPaterno: "Van",
      apellidoMaterno: "materno",
      telefono: "(586)-084-3453",
      direccion: "Netherlands, Overijssel",
      correo: "nazife.vanmeeteren@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Philip",
      apellidoPaterno: "Lewis",
      apellidoMaterno: "materno",
      telefono: "02-1203-2246",
      direccion: "Australia, Victoria",
      correo: "philip.lewis@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Begüm",
      apellidoPaterno: "Karaduman",
      apellidoMaterno: "materno",
      telefono: "(831)-673-5830",
      direccion: "Turkey, Osmaniye",
      correo: "begum.karaduman@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Brooke",
      apellidoPaterno: "Davidson",
      apellidoMaterno: "materno",
      telefono: "031-739-9867",
      direccion: "Ireland, Limerick",
      correo: "brooke.davidson@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Sienna",
      apellidoPaterno: "Clarke",
      apellidoMaterno: "materno",
      telefono: "(265)-632-9156",
      direccion: "New Zealand, Tasman",
      correo: "sienna.clarke@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Isabelle",
      apellidoPaterno: "Johnson",
      apellidoMaterno: "materno",
      telefono: "(528)-794-2010",
      direccion: "New Zealand, Manawatu-Wanganui",
      correo: "isabelle.johnson@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Evelina",
      apellidoPaterno: "Rolland",
      apellidoMaterno: "materno",
      telefono: "25979869",
      direccion: "Norway, Oslo",
      correo: "evelina.rolland@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Leonie",
      apellidoPaterno: "Schnelle",
      apellidoMaterno: "materno",
      telefono: "0688-7189943",
      direccion: "Germany, Bayern",
      correo: "leonie.schnelle@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Aleksandra",
      apellidoPaterno: "Ege",
      apellidoMaterno: "materno",
      telefono: "53043003",
      direccion: "Norway, Oslo",
      correo: "aleksandra.ege@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Nete",
      apellidoPaterno: "Lima",
      apellidoMaterno: "materno",
      telefono: "(17) 4093-5007",
      direccion: "Brazil, Rondônia",
      correo: "nete.lima@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Zoe",
      apellidoPaterno: "Mackay",
      apellidoMaterno: "materno",
      telefono: "811-025-1893",
      direccion: "Canada, Manitoba",
      correo: "zoe.mackay@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Lorenzo",
      apellidoPaterno: "Marquez",
      apellidoMaterno: "materno",
      telefono: "986-657-117",
      direccion: "Spain, Región de Murcia",
      correo: "lorenzo.marquez@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Martha",
      apellidoPaterno: "Ward",
      apellidoMaterno: "materno",
      telefono: "09-2743-7049",
      direccion: "Australia, Northern Territory",
      correo: "martha.ward@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Katrina",
      apellidoPaterno: "Rivera",
      apellidoMaterno: "materno",
      telefono: "06-6005-6261",
      direccion: "Australia, Australian Capital Territory",
      correo: "katrina.rivera@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Hilda",
      apellidoPaterno: "Russell",
      apellidoMaterno: "materno",
      telefono: "(767)-213-3564",
      direccion: "United States, Nevada",
      correo: "hilda.russell@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Pamela",
      apellidoPaterno: "Kelly",
      apellidoMaterno: "materno",
      telefono: "(924)-526-1766",
      direccion: "United States, New York",
      correo: "pamela.kelly@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Roger",
      apellidoPaterno: "Edwards",
      apellidoMaterno: "materno",
      telefono: "(370)-440-4146",
      direccion: "United States, Delaware",
      correo: "roger.edwards@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Penny",
      apellidoPaterno: "Herrera",
      apellidoMaterno: "materno",
      telefono: "(832)-981-3173",
      direccion: "United States, Nevada",
      correo: "penny.herrera@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Jaxon",
      apellidoPaterno: "Hall",
      apellidoMaterno: "materno",
      telefono: "(142)-567-0411",
      direccion: "New Zealand, Bay of Plenty",
      correo: "jaxon.hall@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Caleb",
      apellidoPaterno: "Clarke",
      apellidoMaterno: "materno",
      telefono: "(533)-504-5896",
      direccion: "New Zealand, Otago",
      correo: "caleb.clarke@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Tomas",
      apellidoPaterno: "Hölscher",
      apellidoMaterno: "materno",
      telefono: "0550-8915592",
      direccion: "Germany, Bayern",
      correo: "tomas.holscher@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "سارا",
      apellidoPaterno: "سهيلي",
      apellidoMaterno: "materno",
      telefono: "018-16273873",
      direccion: "Iran, لرستان",
      correo: "sr.shylyrd@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Elly",
      apellidoPaterno: "Grini",
      apellidoMaterno: "materno",
      telefono: "51196805",
      direccion: "Norway, Buskerud",
      correo: "elly.grini@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Eren",
      apellidoPaterno: "Akyürek",
      apellidoMaterno: "materno",
      telefono: "(477)-348-9569",
      direccion: "Turkey, Erzurum",
      correo: "eren.akyurek@example.com",
      rol: "NO SUPPORTED"
    },
    {
      id: 1,
      nombre: "Melisa",
      apellidoPaterno: "Faure",
      apellidoMaterno: "materno",
      telefono: "076 675 24 27",
      direccion: "Switzerland, Fribourg",
      correo: "melisa.faure@example.com",
      rol: "NO SUPPORTED"
    }
  ];


  constructor(
    private _globalRequest: GlobalRequestService,
  ) { }


  public getCustomers(): Promise<Customer[]> {
    return new Promise((good, bad) => {
      good(this.customers);
    });
  }

}
