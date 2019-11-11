export interface Album {
    albumType: string;
    artists: Artist[];
    copyrights: Copyright[];
    externalIDS: ExternalIDS;
    externalUrls: ExternalUrls;
    genres: any[];
    href: string;
    id: string;
    images: Image[];
    label: string;
    name: string;
    popularity: number;
    releaseDate: Date;
    releaseDatePrecision: string;
    totalTracks: number;
    tracks: Tracks;
    type: string;
    uri: string;
}

export interface Artist {
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: ArtistType;
    uri: string;
}

export interface ExternalUrls {
    spotify: string;
}

export enum ArtistType {
    Artist = "artist",
}

export interface Copyright {
    text: string;
    type: string;
}

export interface ExternalIDS {
    upc: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Tracks {
    href: string;
    items: Item[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}

export interface Item {
    artists: Artist[];
    discNumber: number;
    durationMS: number;
    explicit: boolean;
    externalUrls: ExternalUrls;
    href: string;
    id: string;
    isLocal: boolean;
    isPlayable: boolean;
    name: string;
    previewURL: string;
    trackNumber: number;
    uri: string;
}