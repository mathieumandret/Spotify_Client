import {Component, OnInit} from '@angular/core'
import {Artist} from '../model/artist'
import {ArtistService} from '../services/artist.service'

@Component({
  selector: 'app-liste-chanteurs',
  templateUrl: './liste-chanteurs.component.html',
  styleUrls: ['./liste-chanteurs.component.css']
})
export class ListeChanteursComponent implements OnInit {

  artists?: Artist[] = []
  error?: string

  constructor(private artistService: ArtistService) {
  }

  ngOnInit() {
  }

  rechercherArtiste(key: string) {
    this.artistService.search(key)
      .subscribe(
        artists => this.artists = artists,
        () => this.error = 'Impossible de récuperer la liste des artistes'
      )
  }
}
