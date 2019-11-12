import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SpotifyService, Album } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  public albums: Album[];

  constructor(
    private _route: ActivatedRoute,
    private _router: ActivatedRoute,
    private _toast: ToastrService,
    private _spotifyService: SpotifyService
  ) {
    this._router.paramMap.subscribe(async (params) => {
      this.albums = await this._spotifyService.searchAlbum(params.get("seachAlbum"), 30);
    });
  }

  ngOnInit() {
  }

}
