import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {SpotifyService} from '../services/spotify.service'
import {AlbumDetails} from '../model/albumDetails'
import {Observable} from 'rxjs'
import {share} from 'rxjs/operators'

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DetailAlbumComponent implements OnInit {

  album: Observable<AlbumDetails>

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) {
  }

  ngOnInit() {
    this.album = this.spotifyService.getAlbumDetails(
      this.route.snapshot.params['id']
    ).pipe(share())
  }
}

