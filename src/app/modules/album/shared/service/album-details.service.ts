import {Injectable} from '@angular/core'
import {ResourceReadService} from '../../../../shared/services/resource-read.service'
import {HttpClient} from '@angular/common/http'
import {AlbumDetailsDeserializer} from '../models/album-details-deserializer'
import {AlbumDetails} from '../models/album-details'

@Injectable({
  providedIn: 'root'
})
export class AlbumDetailsService extends ResourceReadService<AlbumDetails> {

  constructor(http: HttpClient) {
    super(
      http,
      'albums',
      new AlbumDetailsDeserializer()
    )
  }
}
