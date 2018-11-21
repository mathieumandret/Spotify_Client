import {Deserializer} from '../../../../shared/models/serializers/deserializer'
import {Album} from './album'
import {TrackDeserializer} from './track-deserializer'

export class AlbumDeserializer implements Deserializer<Album> {
  fromJson(json: any): Album {
    const album = new Album()
    album.name = json.name
    album.id = json.id
    album.imageURL = json.images.length > 0 ? json.images[0].url : '/assets/album-placeholder.png'
    album.artists = json.artists.map((a: any) => a.name)
    if (json.tracks) {
      const trackDeserializer = new TrackDeserializer()
      album.tracks = json.tracks.items.map((t: any) => trackDeserializer.fromJson(t))
    }
    return album
  }
}
