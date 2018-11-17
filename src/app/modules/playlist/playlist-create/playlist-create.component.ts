import {Component, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import {Playlist} from '../shared/models/playlist'
import {PlaylistService} from '../shared/services/playlist.service'
import {MatSnackBar} from '@angular/material'
import {Location} from '@angular/common'

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.scss']
})
export class PlaylistCreateComponent implements OnInit {

  form = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    isPublic: [true]
  })

  constructor(
    private fb: FormBuilder,
    private playlistService: PlaylistService,
    private snackbar: MatSnackBar,
    private location: Location
  ) {
  }

  ngOnInit() {
  }

  confirm() {
    const playlist = new Playlist()
    const value = this.form.value
    playlist.name = value.name
    playlist.description = value.description
    playlist.public = value.isPublic
    this.playlistService.create(playlist)
      .subscribe(createdPlaylist => {
        this.snackbar.open(`Playlist "${createdPlaylist.name}" créée`, undefined, {duration: 500})
        this.location.back()
      })
  }
}
