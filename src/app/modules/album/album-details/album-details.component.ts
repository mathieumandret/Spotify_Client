import {Component, OnInit} from '@angular/core'
import {AlbumDetails} from '../shared/models/album-details'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album!: AlbumDetails

  constructor(private activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {
    this.album = this.activatedRoute.snapshot.data.album
  }

}
