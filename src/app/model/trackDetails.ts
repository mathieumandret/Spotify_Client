import {Track} from './track'

export class TrackDetails extends Track {
  artists: string[]
  albumName: string

  constructor(json: any) {
    json = json.track
    super(json)
    this.albumName = json.album.name
    this.artists = json.artists.map((a: any) => a.name)
  }
}
