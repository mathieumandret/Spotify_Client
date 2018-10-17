import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { Artist } from '../model/artist';

@Component({
  selector: 'app-liste-chanteurs',
  templateUrl: './liste-chanteurs.component.html',
  styleUrls: ['./liste-chanteurs.component.css']
})
export class ListeChanteursComponent implements OnInit {

  artists: Artist[] = []

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  rechercherArtiste(key: string) {
    this.spotifyService.getArtists(key).subscribe(artist => this.artists = artist)
  }

}
