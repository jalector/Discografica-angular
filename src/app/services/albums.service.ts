import { Injectable } from '@angular/core';
import { Album } from '../model/Album.model';
import { GlobalRequestService } from './global-request.service';
import { Util } from '../util';

export { Album } from '../model/Album.model';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private _globalRequest: GlobalRequestService,
  ) { }

  // TODO: Implement method `getAlbums`.
  public getAlbums(): Promise<Album[]> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._globalRequest.api + "/disks",
        params: "",
        token: null,
      }).then((response) => {
        good(Util.fromJSONColleciton(response, Album.fromJSON));
      }).catch((error) => {
        bad(error);
      });
    });
  }

  public addStock(album: Album): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.post({
        url: this._globalRequest.api + "/disks",
        body: album.toJSON(20 /** Esperando el login :v  */),
        token: null,
      }).then((response) => {
        good(response.message);
      }).catch(error => {
        bad(error);
      });
    });
  }


  public updateStock(album: Album): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.post({
        url: this._globalRequest.api + "/disks",
        body: album.toJSON(),
        token: null,
      }).then((response) => {
        good(response.message);
      }).catch(error => {
        bad(error);
      });
    });
  }


  public delete(id: string): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.delete({
        url: this._globalRequest.api + `/disks/${id}`,
        params: "",
      }).then((response) => {
        good(response.message);
      }).catch((error) => {
        bad(error);
      });
    });
  }

}
