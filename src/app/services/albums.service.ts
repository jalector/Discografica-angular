import { Injectable } from '@angular/core';
import { Album } from '../Model/Album.model';

export { Album } from '../Model/Album.model';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  // TODO: Implement method `getAlbums`.
  public getAlbums(): Album[] {
    return [];
  }

  // TODO: Implement method `searchAlbum`.
  public searchAlbum(searchedAlbum: string): Album[] {
    return [];
  }

  // TODO: Implement method `addStock`.
  public addStock(album: Album): void { }

  // TODO: Implement method `updateStock`.
  public updateStock(album: Album): void { }

}
