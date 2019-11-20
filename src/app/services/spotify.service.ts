import { Injectable } from '@angular/core';
import { GlobalRequestService } from './global-request.service';
import { Album } from '../Model/Album.model';
import { Util } from '../util';
export { Album } from '../Model/Album.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _api: string = "https://api.spotify.com/v1/";
  private _token: string = "BQA9LJP4bukdsTgsO1vZfF1TVFjZyDsThi2sGiKmLX0xRKpyQ95rTd2jaNQ9pNwQKqQeU6auPAn9Uq19NSk";

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
