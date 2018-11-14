import {Deserializer} from '../../../../shared/models/serializers/deserializer'
import {Artist} from './artist'

export class ArtistDeserializer implements Deserializer<Artist> {
  fromJson(json: any): Artist {
    const artist = new Artist()
    artist.name = json.name
    artist.id = json.id
    artist.imageURL = json.images.length > 0 ? json.images[0].url : '/assets/artist-placeholder.jpeg'
    return artist
  }
}
