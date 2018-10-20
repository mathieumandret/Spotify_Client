import {Injectable} from '@angular/core'
import {BaseSpotifyService} from './baseSpotifyService'
import {HttpClient} from '@angular/common/http'
import {LoadingService} from './loading.service'
import {Artist} from '../model/artist'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ArtistService extends BaseSpotifyService {

  constructor(http: HttpClient, loading: LoadingService) {
    super(http, loading, 'search?type=artist&market=FR&limit=10&q=')
  }

  parseArtists(res: any): Artist[] {
    return res.artists.items.map((a: any) => new Artist(a))
  }

  search(key: string): Observable<Artist[]> {
    return super.search(key)
      .pipe(map(res => this.parseArtists(res)))
  }
}
