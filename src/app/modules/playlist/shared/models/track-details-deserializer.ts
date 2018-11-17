import {TrackDeserializer} from '../../../album/shared/models/track-deserializer'
import {TrackDetails} from './track-details'

export class TrackDetailsDeserializer extends TrackDeserializer {
  fromJson(json: any): TrackDetails {
    const track = super.fromJson(json)
    const details = Object.assign(new TrackDetails(), track)
    details.albumName = json.album.name
    return details
  }
}
