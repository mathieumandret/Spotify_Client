import {Injectable} from '@angular/core'
import {BaseSpotifyService} from './baseSpotifyService'
import {HttpClient} from '@angular/common/http'
import {Album} from '../model/album'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {LoadingService} from './loading.service'
import {AlbumDetails} from '../model/albumDetails'

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseSpotifyService {
  constructor(http: HttpClient, loading: LoadingService) {
    super(http, loading, 'search?type=album&market=FR&limit=10&q=')
  }

  getById(id: string): Observable<AlbumDetails> {
    return super.getRequest('albums/' + id)
      .pipe(map(details => new AlbumDetails(details)))
  }

  search(key: string): Observable<Album[]> {
    return super.search(key)
      .pipe(map(items => this.parseAlbums(items)))
  }

  private parseAlbums(res: any): Album[] {
    return res.albums.items.map((item: any) => new Album(item))
  }
}
