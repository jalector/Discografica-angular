import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SpotifyService, Album } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-disc-page',
  templateUrl: './disc-page.component.html',
  styleUrls: ['./disc-page.component.css']
})
export class DiscPageComponent {
  public id: string;
  public album: Album;

  constructor(
    private _route: ActivatedRoute,
    private _sanitazer: DomSanitizer,
    private _spotifyService: SpotifyService,
  ) {
    this._route.paramMap.subscribe(async (params) => {
      this.id = params.get("id");
      this.album = await this._spotifyService.getAlbum(this.id);
    });
  }

  public get previewAlbumURL() {
    return this._sanitazer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/album/" + this.id);
  }



}
