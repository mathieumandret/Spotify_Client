import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {Playlist} from '../shared/models/playlist'

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  playlists$!: Observable<Playlist>

  constructor() {
  }

  ngOnInit() {
  }

}
