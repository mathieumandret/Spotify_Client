import {Playlist} from './playlist'
import {TrackDetails} from './trackDetails'

export interface PlaylistDetails extends Playlist {
  tracks: TrackDetails
  description: string
}
