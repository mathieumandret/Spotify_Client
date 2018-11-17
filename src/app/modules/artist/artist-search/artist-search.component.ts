import {Component} from '@angular/core'
import {ResourceSearch} from '../../../shared/components/resource-search/resource-search'
import {ArtistService} from '../shared/services/artist.service'
import {Artist} from '../shared/models/artist'

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search-component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent extends ResourceSearch<Artist> {

  constructor(service: ArtistService) {
    super(service)
  }
}
