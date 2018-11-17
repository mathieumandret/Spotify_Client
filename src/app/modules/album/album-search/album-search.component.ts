import {Component} from '@angular/core'
import {ResourceSearch} from '../../../shared/components/resource-search/resource-search'
import {Album} from '../shared/models/album'
import {AlbumService} from '../shared/service/album.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-album-search',
  templateUrl: './album-search-component.html',
  styleUrls: ['./album-search.component.scss']
})
export class AlbumSearchComponent extends ResourceSearch<Album> {

  constructor(service: AlbumService, private router: Router) {
    super(service)
  }

  albumSelected(album: Album) {
    this.router.navigate(['/albums', album.id]).then()
  }

}
