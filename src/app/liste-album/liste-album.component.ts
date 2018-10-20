import {Component, OnInit} from '@angular/core'
import {Album} from '../model/album'
import {AlbumService} from '../services/album.service'

@Component({
  selector: 'app-liste-album',
  templateUrl: './liste-album.component.html',
  styleUrls: ['./liste-album.component.css']
})
export class ListeAlbumComponent implements OnInit {


  albums?: Album[]
  error?: string

  constructor(private albumService: AlbumService) {
  }

  ngOnInit() {
  }

  rechercherAlbum(key: string) {
    this.albumService.search(key)
      .subscribe(albums => this.albums = albums, () => {
        this.albums = []
        this.error = 'Impossible de récuperer la liste des albums'
      })
  }

}
