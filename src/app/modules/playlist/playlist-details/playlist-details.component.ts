import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Playlist} from '../shared/models/playlist'
import {MatTableDataSource} from '@angular/material'
import {PlaylistService} from '../shared/services/playlist.service'
import {Track} from '../../album/shared/models/track'
import {UserService} from '../../user/services/user.service'

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  playlist!: Playlist
  tracks!: MatTableDataSource<Track>
  displayedColumns = ['title', 'artist', 'album', 'extrait']

  constructor(
    private activatedRoute: ActivatedRoute,
    private playlistService: PlaylistService,
    private userService: UserService) {
  }

  ngOnInit() {
    this.playlist = this.activatedRoute.snapshot.data.playlist
    // N'afficher la colonne supprimer que si l'utilisateur
    // est le proprietaire de la playlist
    if (this.playlist.owner.id === this.userService.getCurrentUser().id) {
      this.displayedColumns.push('supprimer')
    }
    this.tracks = new MatTableDataSource(this.playlist.tracks)
  }

  delete(track: Track) {
    this.playlistService.deleteTrack(this.playlist, track)
      .subscribe(
        () => {
          this.playlist.tracks = this.playlist.tracks.filter(t => t.id !== track.id)
          this.tracks = new MatTableDataSource(this.playlist.tracks)
          console.log('Piste supprimée')
        },
        () => console.log('Erreur suppression')
      )
  }

}
