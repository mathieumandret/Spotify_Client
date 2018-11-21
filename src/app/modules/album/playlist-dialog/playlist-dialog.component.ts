import {Component, Inject, OnInit} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'
import {Playlist} from '../../playlist/shared/models/playlist'

@Component({
  selector: 'app-playlist-dialog',
  templateUrl: './playlist-dialog.component.html',
  styleUrls: ['./playlist-dialog.component.scss']
})
export class PlaylistDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PlaylistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public playlists: Playlist[]
  ) {
  }

  ngOnInit() {
  }

  selectPlaylist(p: Playlist) {
    this.dialogRef.close(p)
  }
}
