import {Injectable} from '@angular/core'
import {Track} from '../model/track'
import {TrackDetails} from '../model/trackDetails'

@Injectable({
  providedIn: 'root'
})

export class TrackService {

  constructor() {
  }

  parseTrack(track: any): Track {
    return {
      id: track.id,
      title: track.name,
      duration: (track.duration_ms / 1000 / 60).toFixed(2),
      url: track.preview_url
    }
  }


  parseTracks(tracks: any[]): Track[] {
    return tracks.map(track => this.parseTrack(track))
  }


}
