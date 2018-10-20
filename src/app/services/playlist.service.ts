import {Injectable} from '@angular/core'
import {BaseSpotifyService} from './baseSpotifyService'
import {HttpClient} from '@angular/common/http'
import {LoadingService} from './loading.service'
import {Playlist} from '../model/playlist'
import {map} from 'rxjs/operators'
import {PlaylistDetails} from '../model/playlistDetails'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService extends BaseSpotifyService {

  constructor(http: HttpClient, loading: LoadingService) {
    super(http, loading, 'users/math119/playlists')
  }

  getById(id: string) {
    return super.getRequest(`playlists/${id}`)
      .pipe(map(res => new PlaylistDetails(res)))
  }

  getAll() {
    return super.getRequest(this.URL)
      .pipe(map(res => this.parsePlaylists(res.items)))
  }

  private parsePlaylists(playlists: any[]): Playlist[] {
    return playlists.map(playlist => new Playlist(playlist))
  }
}
