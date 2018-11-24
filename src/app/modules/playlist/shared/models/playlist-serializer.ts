import {Playlist} from './playlist'
import {Serializer} from '../../../../shared/models/serializers/serializer'

export class PlaylistSerializer implements Serializer<Playlist> {
  toJson(playlist: Playlist): any {
    return {
      name: playlist.name,
      description: playlist.description,
      public: playlist.public
    }
  }
}
