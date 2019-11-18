import { Injectable } from '@angular/core';
import { GlobalRequestService } from './global-request.service';
import { Album } from '../Model/Album.model';
export { Album } from '../Model/Album.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _api: string = "https://api.spotify.com/v1/";
  private _token: string = "BQAgO5wOG9RhbrnJhetW0j_2L9lF2esfJGSHuWHmHsGcncJvBu2BFLC_bAOvZSKAOsxKLIySE_fV0-Y4hkk";

  constructor(
    private _globalRequest: GlobalRequestService
  ) { }

  private token(): string {
    return "Bearer " + this._token;
  }



  public getNewReleases(): Promise<Album[]> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._api + 'browse/new-releases',
        token: this.token(),
        params: '',
      }).then((response) => {
        good(response.albums.items);
      });
    });
  }

  public getAlbum(id: string): Promise<Album> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._api + `albums/${id}`,
        token: this.token(),
        params: '?market=es'
      }).then((response) => {
        good(response);
      });
    });
  }

  public searchAlbum(album: string, limit: number): Promise<Album[]> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._api + "search",
        token: this.token(),
        params: `?q=${album}&type=album`
      }).then((response) => {
        good(response.albums.items);
      });
    });
  }

  // getArtists(termino: string) {
  //   return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
  //     .pipe(map(data => data['artists'].items));
  // }

  // getArtist(id: string) {
  //   return this.getQuery(`artists/${id}`);
  // }

  // getTopTracks(id: string) {
  //   return this.getQuery(`artists/${id}/top-tracks?country=us`)
  //     .pipe(map(data => data['tracks']))
  // }
}
