import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core'
import {MatSliderChange} from '@angular/material'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() url!: string
  @ViewChild('audio') private audioRef!: ElementRef
  player!: HTMLAudioElement
  isPlaying = false

  constructor() {
  }

  ngOnInit() {
    this.player = this.audioRef.nativeElement
    this.player.onended = () => this.isPlaying = false
    // Ecouter les changement pour forcer la mise a jour du slider
    this.player.ontimeupdate = () => {
    }
  }

  play() {
    if (this.isPlaying) {
      this.player.pause()
      this.isPlaying = false
    } else {
      this.player.play()
        .then(() => this.isPlaying = true)
    }
  }

  sliderChange(event: MatSliderChange) {
    this.player.currentTime = event.value || 0
  }
}
