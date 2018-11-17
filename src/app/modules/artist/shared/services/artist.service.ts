import {Injectable} from '@angular/core'
import {ResourceReadService} from '../../../../shared/services/resource-read.service'
import {HttpClient} from '@angular/common/http'
import {ArtistDeserializer} from '../models/artist-deserializer'
import {Artist} from '../models/artist'

@Injectable({
  providedIn: 'root'
})
export class ArtistService extends ResourceReadService<Artist> {

  constructor(http: HttpClient) {
    super(
      http,
      'artists',
      new ArtistDeserializer()
    )
  }
}
