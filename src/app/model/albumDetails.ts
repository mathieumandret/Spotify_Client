import {Album} from './album'
import {Track} from './track'

export class AlbumDetails extends Album {
  tracks: Track[]

  constructor(json: any) {
    super(json)
    this.tracks = json.tracks.items.map((t: any) => new Track(t))
  }

}
