import {PlaylistDeserializer} from './playlist-deserializer'
import {PlaylistDetails} from './playlist-details'
import {TrackDeserializer} from '../../../album/shared/models/track-deserializer'

export class PlaylistDetailsDeserializer extends PlaylistDeserializer {

  fromJson(json: any): PlaylistDetails {
    const playlist = super.fromJson(json)
    const details = Object.assign(new PlaylistDetails(), playlist)
    const trackDeserializer = new TrackDeserializer()
    // TODO: Use correct path
    details.tracks = json.tracks.map(t => trackDeserializer.fromJson(t))
    return details
  }
}
