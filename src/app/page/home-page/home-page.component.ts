import { Component, OnInit } from '@angular/core';
import { SpotifyService, Album } from '../../services/spotify.service';
import { AlbumsService } from 'src/app/services/albums.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public albums: Album[] = [];

  constructor(
    private _albumsService: AlbumsService
  ) {
    this.getAlbums();
  }

  private async getAlbums() {
    this.albums = await this._albumsService.getAlbums();
  }

}
