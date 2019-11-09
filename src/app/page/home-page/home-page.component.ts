import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private _spotifyService: SpotifyService
  ) { }

  public ngOnInit(): void {
    this.getNewReleases();
  }
  private async getNewReleases() {
    var json = await this._spotifyService.getNewReleases();
    console.log(json);
  }

}
