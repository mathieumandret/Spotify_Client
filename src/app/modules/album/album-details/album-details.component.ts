import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Observable} from 'rxjs'
import {AlbumDetails} from '../shared/models/album-details'
import {AlbumService} from '../shared/service/album.service'

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album$!: Observable<AlbumDetails>

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.album$ = this.albumService.getDetails(id)
  }

}
