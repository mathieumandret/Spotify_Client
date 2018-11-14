import {AlbumDeserializer} from './album-deserializer'
import {TrackDeserializer} from './track-deserializer'
import {AlbumDetails} from './album-details'

export class AlbumDetailsDeserializer extends AlbumDeserializer {
  fromJson(json: any): AlbumDetails {
    const album = super.fromJson(json)
    const albumDetails = Object.assign(new AlbumDetails(), album)
    const trackDeserializer = new TrackDeserializer()
    albumDetails.tracks = json.tracks.items.map(t => trackDeserializer.fromJson(t))
    return albumDetails
  }
}
