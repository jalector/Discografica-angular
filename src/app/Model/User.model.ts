import { Person } from "../interface/Person.interface";

export class User implements Person {
    public passwordConfirm: string;
    public constructor(
        public id?: number,
        public name?: string,
        public lastname?: string,
        public phone?: string,
        public address?: string,
        public email?: string,
        public password?: string,
        public userType?: string,
    ) { }

    public toJSON(): string {
        let json = {
            name: this.name,
            lastname: this.lastname,
            phone: this.phone,
            address: this.address,
            email: this.email,
            password: this.password,
            user_type: "empleado",
        };

        return JSON.stringify(json);
    }

    public static fromJSON(json): User {
        let user: User;
        user = new User(
            json.id,
            json.name,
            json.lastname,
            json.phone,
            json.address,
            json.email,
            json.password,
            json.user_type,
        );
        return user;
    }

}
