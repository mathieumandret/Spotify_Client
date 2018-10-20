import {Playlist} from './playlist'
import {TrackDetails} from './trackDetails'

export interface PlaylistDetails extends Playlist {
  tracks: TrackDetails
  description: string
}

export class PlaylistDetails extends Playlist {
  tracks: TrackDetails
  description: string

  constructor(json: any) {
    super(json)
    this.tracks = json.tracks.items.map((t: any) => new TrackDetails(t))
    this.description = json.description
  }
}
