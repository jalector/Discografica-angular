import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/services/spotify.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  @Input() album: Album;




  constructor(
    public _cardService: CartService
  ) {
  }


}
