import {Injectable} from '@angular/core'
import {BaseSpotifyService} from './baseSpotifyService'
import {HttpClient} from '@angular/common/http'
import {Album} from '../model/album'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {LoadingService} from './loading.service'
import {AlbumDetails} from '../model/albumDetails'
import {TrackService} from './track.service'

@Injectable({
  providedIn: 'root'
})
export class AlbumService extends BaseSpotifyService {
  constructor(http: HttpClient, loading: LoadingService, private trackService: TrackService) {
    super(http, loading, 'search?type=album&market=FR&limit=10&q=')
  }

  private parseAlbum(album: any): Album {
    return {
      id: album.id,
      type: album.album_type,
      name: album.name,
      artists: album.artists.map(artist => artist.name),
      imageURL: (album.images && album.images.length > 0) ? album.images[0].url : undefined
    }
  }

  private parseAlbums(res: any): Album[] {
    return res.albums.items.map(item => this.parseAlbum(item))
  }

  private parseAlbumDetails(res: any): AlbumDetails {
    return {
      ...this.parseAlbum(res),
      tracks: this.trackService.parseTracks(res.tracks.items)
    }
  }

  search(key: string): Observable<Album[]> {
    return super.search(key)
      .pipe(map(items => this.parseAlbums(items)))
  }

  getById(id: string): Observable<AlbumDetails> {
    return super.getRequest('albums/' + id)
      .pipe(
        map(res => this.parseAlbumDetails(res))
      )
  }

}
