import {Deserializer} from '../../../../shared/models/serializers/deserializer'
import {Track} from './track'

export class TrackDeserializer implements Deserializer<Track> {

  fromJson(json: any): Track {
    const track = new Track()
    track.name = json.name
    track.url = json.preview_url
    track.duration = String((json.duration_ms / 1000 / 60).toFixed(2))
    track.artists = json.album.artists.map(a => a.name)
    track.albumName = json.album.name
    return track
  }

}