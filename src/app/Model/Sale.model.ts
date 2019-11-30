export class Sale {
    constructor(
        public id: number,
        public user: string,
        public client: number,
        public quantity: number,
        public price: string,
        public title: string,
        public date: Date,
    ) { }

    public static fromJSON(json): Sale {
        return new Sale(
            json.id,
            json.user,
            json.client,
            json.quantity,
            json.price,
            json.title,
            new Date(json.date),
        );
    }
}