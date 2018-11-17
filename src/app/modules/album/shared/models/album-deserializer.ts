import {Deserializer} from '../../../../shared/models/serializers/deserializer'
import {Album} from './album'

export class AlbumDeserializer implements Deserializer<Album> {
  fromJson(json: any): Album {
    const album = new Album()
    album.name = json.name
    album.id = json.id
    album.imageURL = json.images.length > 0 ? json.images[0].url : '/assets/album-placeholder.png'
    album.artists = json.artists.map(a => a.name)
    return album
  }
}
