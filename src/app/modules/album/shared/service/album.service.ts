import {Injectable} from '@angular/core'
import {ResourceReadService} from '../../../../shared/services/resource-read.service'
import {Album} from '../models/album'
import {HttpClient} from '@angular/common/http'
import {AlbumDeserializer} from '../models/album-deserializer'
import {Observable} from 'rxjs'
import {AlbumDetails} from '../models/album-details'
import {map} from 'rxjs/operators'
import {AlbumDetailsDeserializer} from '../models/album-details-deserializer'

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends ResourceReadService<Album> {

  constructor(http: HttpClient) {
    super(
      http,
      'albums',
      new AlbumDeserializer()
    )
  }

  getDetails(id: string): Observable<AlbumDetails> {
    return this.http.get(`${this.API_URL}/${this.endpoint}/${id}`)
      .pipe(map(res => new AlbumDetailsDeserializer().fromJson(res)))
  }

}
