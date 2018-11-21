import {Deserializer} from '../../../../shared/models/serializers/deserializer'
import {Playlist} from './playlist'
import {TrackDeserializer} from '../../../album/shared/models/track-deserializer'
import {UserDeserializer} from '../../../user/models/user-deserializer'

export class PlaylistDeserializer implements Deserializer<Playlist> {

  fromJson(json: any): Playlist {
    const playlist = new Playlist()
    playlist.id = json.id
    playlist.name = json.name
    playlist.public = json.public
    playlist.description = json.description
    playlist.imageURL = json.images.length > 0 ? json.images[0].url : '/assets/album-placeholder.png'
    if (json.tracks.items) {
      const deserializer = new TrackDeserializer()
      playlist.tracks = json.tracks.items.map((item: any) => deserializer.fromJson(item.track))
    }
    playlist.owner = new UserDeserializer().fromJson(json.owner)
    return playlist
  }

}
