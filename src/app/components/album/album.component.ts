import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  @Input() album: Album;


  public get getImage() {
    return this.album.images[0].url;
  }

  constructor() {
  }


}
