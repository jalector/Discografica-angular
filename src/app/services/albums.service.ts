import { Injectable } from '@angular/core';
import { Album } from '../model/Album.model';
import { GlobalRequestService } from './global-request.service';
import { Util } from '../util';
import { SessionService } from './session.service';

export { Album } from '../model/Album.model';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private _globalRequest: GlobalRequestService,
    private _sessionSservice: SessionService
  ) { }

  // TODO: Implement method `getAlbums`.
  public getAlbums(id?: string): Promise<any> {
    return new Promise((good, bad) => {
      this._globalRequest.get({
        url: this._globalRequest.disks_and_sales + "/disks",
        params: (id != null) ? "/" + id : "",
        token: null,
      }).then((response) => {
        if (id == null) {
          good(Util.fromJSONColleciton(response, Album.fromJSON));
        } else {
          good(Album.fromJSON(response));
        }
      }).catch((error) => {
        bad(error);
      });
    });
  }

  public addStock(album: Album): Promise<string> {
    return new Promise((good, bad) => {
      this._globalRequest.post({
        url: this._globalRequest.disks_and_sales + "/disks",
        body: album.toSave(this._sessionSservice.user.id),
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
        url: this._globalRequest.disks_and_sales + "/disks",
        body: album.toSave(),
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
        url: this._globalRequest.disks_and_sales + `/disks/${id}`,
        params: "",
      }).then((response) => {
        good(response.message);
      }).catch((error) => {
        bad(error);
      });
    });
  }

}
