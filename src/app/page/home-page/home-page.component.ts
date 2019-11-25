import { Component, OnInit } from '@angular/core';
import { SpotifyService, Album } from '../../services/spotify.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public albums: Album[];

  constructor(
    private _spotifyService: SpotifyService
  ) {
    this.getNewReleases();
  }

  private async getNewReleases() {
    this.albums = await this._spotifyService.getNewReleases();
    console.log(this.albums);
  }

}
