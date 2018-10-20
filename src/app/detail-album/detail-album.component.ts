import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {AlbumDetails} from '../model/albumDetails'
import {Observable} from 'rxjs'
import {AlbumService} from '../services/album.service'

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DetailAlbumComponent implements OnInit {

  album?: Observable<AlbumDetails>
  error?: string

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService) {
  }

  ngOnInit() {
    this.album = this.albumService.getById(this.route.snapshot.params['id'])
  }
}

