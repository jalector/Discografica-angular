export class Album {
    constructor(
        public id: string,
        public name: string,
        public artist: string,
        public image: string,
        public totalTracks: number,
        public releaseDate: string,
    ) { }

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
}
