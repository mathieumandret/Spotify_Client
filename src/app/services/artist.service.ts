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

  parseArtist(item: any): Artist {
    return {
      id: item.id,
      name: item.name,
      imageURL: (item.images && item.images.length > 1) ? item.images[1].url : undefined
    }
  }

  parseArtists(res: any): Artist[] {
    return res.artists.items.map(item => this.parseArtist(item))
  }

  search(key: string): Observable<Artist[]> {
    return super.search(key)
      .pipe(map(res => this.parseArtists(res)))
  }
}
