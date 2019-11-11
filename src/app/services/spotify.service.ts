import { Injectable } from '@angular/core';
import { GlobalRequestService } from './global-request.service';
import { Album } from '../Model/Album.model';
export { Album } from '../Model/Album.model';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _api: string = "https://api.spotify.com/v1/";
  private _token: string = "BQCr48bkzfYy-N0almA_AtQUnoS5W9gtKVbyDzQoTM_81x6PR-hYsy1KgRQpCzBztU8wHijgGVNot1NF0PM";

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
        console.log(response);
        good(response);
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
