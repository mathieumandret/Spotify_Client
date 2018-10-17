import {Track} from './track'

export interface TrackDetails extends Track {
  artists: string[]
  albumName: string
}
