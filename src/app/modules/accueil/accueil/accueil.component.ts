import { Component, OnInit } from '@angular/core';

interface LinkCard {
  imageURL: string
  title: string
  link: string
}

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  links: LinkCard[] = [
    {title: 'Rechercher un artiste', link: 'artists', imageURL: 'assets/microphone.svg'},
    {title: 'Rechercher un album', link: 'albums', imageURL: 'assets/vinyl.svg'},
    {title: 'Consulter les playlists', link: 'playlists', imageURL: 'assets/turntable.svg'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
