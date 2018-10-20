import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {PlaylistService} from '../services/playlist.service'
import {PlaylistDetails} from '../model/playlistDetails'

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {

  playlist?: PlaylistDetails

  constructor(private route: ActivatedRoute, private playlistService: PlaylistService) {
  }

  ngOnInit() {
    this.playlistService.getById(this.route.snapshot.params['id'])
      .subscribe(p => this.playlist = p)
  }

}
