import {Deserializer} from '../../../../shared/models/serializers/deserializer'
import {Playlist} from './playlist'

export class PlaylistDeserializer implements Deserializer<Playlist> {

  fromJson(json: any): Playlist {
    const playlist = new Playlist()
    playlist.name = json.name
    playlist.public = json.public
    playlist.imageURL = json.images.length > 0 ? json.images[0].url : 'assets/album-placeholder.png'
    return playlist
  }

}
