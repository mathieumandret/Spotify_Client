import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../services/spotify.service';
import {Album} from '../model/album';

@Component({
  selector: 'app-liste-album',
  templateUrl: './liste-album.component.html',
  styleUrls: ['./liste-album.component.css']
})
export class ListeAlbumComponent implements OnInit {


  albums: Album[];

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit() {
  }

  rechercherAlbum(key: string) {
    this.spotifyService.getAlbums(key).subscribe(albums => this.albums = albums);
  }

}
