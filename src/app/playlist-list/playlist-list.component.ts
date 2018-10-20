import {Component, OnInit} from '@angular/core'
import {PlaylistService} from '../services/playlist.service'
import {Playlist} from '../model/playlist'
import {tap} from 'rxjs/operators'

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent implements OnInit {

  playlists?: Playlist[]

  constructor(private playlistListService: PlaylistService) { }

  ngOnInit() {
    this.playlistListService.getAll().pipe(tap(console.log)).subscribe(playlists => this.playlists = playlists)
  }

}
