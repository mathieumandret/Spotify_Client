import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Playlist} from '../shared/models/playlist'
import {MatTableDataSource} from '@angular/material'
import {TrackDetails} from '../shared/models/track-details'
import {PlaylistService} from '../shared/services/playlist.service'

@Component({
  selector: 'app-playlist-details',
  templateUrl: './playlist-details.component.html',
  styleUrls: ['./playlist-details.component.scss']
})
export class PlaylistDetailsComponent implements OnInit {

  playlist!: Playlist
  tracks!: MatTableDataSource<TrackDetails>
  displayedColumns = ['title', 'artist', 'album', 'extrait', 'supprimer']

  constructor(private activatedRoute: ActivatedRoute, private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlist = this.activatedRoute.snapshot.data.playlist
    this.tracks = new MatTableDataSource(this.playlist.tracks)
  }

  delete(track: TrackDetails) {
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
