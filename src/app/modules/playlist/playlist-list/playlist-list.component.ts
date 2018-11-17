import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'
import {Playlist} from '../shared/models/playlist'
import {PlaylistService} from '../shared/services/playlist.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {

  playlists$!: Observable<Playlist[]>

  constructor(private playlistService: PlaylistService, private router: Router) {
  }

  ngOnInit() {
    this.playlists$ = this.playlistService.getAll()
  }

  playlistSelected(playlist: Playlist) {
    this.router.navigate([`/playlists/details/${playlist.id}`]).then()
  }

}
