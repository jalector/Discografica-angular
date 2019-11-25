export class Album {
    public price: number;
    public stock: number;
    public quantity: number;
    public id: number;

    constructor(
        public id_album: string,
        public title: string,
        public artist: string,
        public image: string,
        public totalTracks: number,
        public releaseDate: string,
    ) { }



    public toJSON(userId?: number | string): string {
        let json = {
            id_album: this.id_album,
            title: this.title,
            artist: this.artist,
            image: this.image,
            total_tracks: this.totalTracks,
            release_date: this.releaseDate,
            price: this.price,
            stock: this.stock,
            user_id: userId
        }

        return JSON.stringify(json);
    }

    public static fromSpotifyJSON(json: any): Album {
        return new Album(
            json.id,
            json.name,
            json.artists[0].name,
            json.images[0].url,
            json.total_tracks,
            json.release_date
        );
    }

    public static fromJSON(json: any): Album {
        let album: Album = new Album(
            json.id_album,
            json.title,
            json.artist,
            json.image,
            json.total_tracks,
            json.release_date,
        );

        album.id = json.id;
        album.price = json.price;
        album.stock = json.stock;

        return album;
    }
}
