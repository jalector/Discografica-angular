import { Person } from "../interface/Person.interface";

export class Customer implements Person{

    public constructor(
        public id?: number,
        public nombre?: string,
        public apellidoPaterno?: string,
        public apellidoMaterno?: string,
        public telefono?: string,
        public direccion?: string,
        public correo?: string,
        public rol?: string,
    ){ }

    public fromJSON(json):Customer {
        let customer:Customer;
        customer = new Customer(
            json.id,
            json.nombre,
            json.apellidoPaterno,
            json.apellidoMaterno,
            json.telefono,
            json.direccion,
            json.correo,
            json.rol
        );
        return customer;
    }


    
}

