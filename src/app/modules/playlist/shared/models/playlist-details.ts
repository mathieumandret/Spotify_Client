import {Playlist} from './playlist'
import {Track} from '../../../album/shared/models/track'

export class PlaylistDetails extends Playlist {
  tracks?: Track[]
}
