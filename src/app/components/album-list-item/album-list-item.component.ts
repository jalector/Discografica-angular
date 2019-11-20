import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/model/Album.model';

@Component({
  selector: 'app-album-list-item',
  templateUrl: './album-list-item.component.html',
  styleUrls: ['./album-list-item.component.css']
})
export class AlbumListItemComponent implements OnInit {


  @Input() album: Album;

  constructor() { }
 
  ngOnInit() {
  }

}
