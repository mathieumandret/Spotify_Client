import {Deserializer} from '../../../../shared/models/serializers/deserializer'
import {Playlist} from './playlist'
import {TrackDetailsDeserializer} from './track-details-deserializer'

export class PlaylistDeserializer implements Deserializer<Playlist> {

  fromJson(json: any): Playlist {
    const playlist = new Playlist()
    playlist.id = json.id
    playlist.name = json.name
    playlist.public = json.public
    playlist.description = json.description
    playlist.imageURL = json.images.length > 0 ? json.images[0].url : '/assets/album-placeholder.png'
    if (json.tracks.items) {
      const deserializer = new TrackDetailsDeserializer()
      playlist.tracks = json.tracks.items.map(item => deserializer.fromJson(item.track))
    }
    return playlist
  }

}
