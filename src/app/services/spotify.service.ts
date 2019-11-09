import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GlobalRequestService } from './global-request.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private _api: string = "https://api.spotify.com/v1/";
  private _token: string = "BQDcfY8Bu0EkI3FYCyme8rYYFsagtiN-56L8FQa37kZdwSXTAcKlK8AAAQyxB5AEGwT07BwQvgWyJibA_dw";

  constructor(
    private _globalRequest: GlobalRequestService
  ) { }

  private token(): string {
    return "Bearer " + this._token;
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this._token
    });

  }


  public getNewReleases(): Promise<any> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._api + 'browse/new-releases',
        token: this.token(),
        params: '',
      }).then((response) => {
        console.log(response);
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
