import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Album} from '../shared/models/album'
import {MatDialog, MatTableDataSource} from '@angular/material'
import {Track} from '../shared/models/track'
import {PlaylistService} from '../../playlist/shared/services/playlist.service'
import {PlaylistDialogComponent} from '../playlist-dialog/playlist-dialog.component'
import {filter, switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album!: Album
  tracks!: MatTableDataSource<Track>
  displayedColumns = ['title', 'artists', 'add_to_playlist']

  constructor(
    private activatedRoute: ActivatedRoute,
    private playlistService: PlaylistService,
    private matDialog: MatDialog
  ) {
  }


  ngOnInit() {
    this.album = this.activatedRoute.snapshot.data.album
    this.tracks = new MatTableDataSource(this.album.tracks)
    // N'afficher la colonne extrait que si au moins une piste a un extrait
    if (this.album.tracks.filter(t => t.url !== null).length > 0) {
      this.displayedColumns.splice(this.displayedColumns.length - 1, 0, 'extract')
    }
  }


  addToPlaylist(track: Track) {
    // Recuperer toutes les playlists
    this.playlistService.getWritable()
      .subscribe(playlists => {
        // Les afficher dans un dialog
        this.matDialog.open(PlaylistDialogComponent, {
          width: '300px',
          data: playlists
        }).afterClosed()
        // Quand une playlist est selectionnée, y ajouter
          .pipe(
            filter(selectedPlaylist => selectedPlaylist !== undefined),
            switchMap(selectedPlaylist => this.playlistService.addTrack(selectedPlaylist, track))
          )
          .subscribe(
            () => console.log('Playlist added'),
            console.error
          )
      })
  }

}
