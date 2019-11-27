import { Injectable } from '@angular/core';
import { GlobalRequestService } from './global-request.service';
import { Album } from '../model/Album.model';
import { Util } from '../util';

export { Album } from '../model/Album.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _api: string = "https://api.spotify.com/v1/";
  private _token: string = "BQB8NMigC-LSE44m_TG0ylubteh2UhMM0BxTqKTaeyc04x-ny1Wutt4YetEdtGM8rQJt2pt7dJCS89SUzlI";

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
        good(Util.fromJSONColleciton<Album>(
          response.albums.items,
          Album.fromSpotifyJSON
        ));
      }).catch((error) => {
        bad(error);
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
        good(Album.fromSpotifyJSON(response));
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

        good(Util.fromJSONColleciton<Album>(
          response.albums.items,
          Album.fromSpotifyJSON
        ));
      });
    });
  }
}
