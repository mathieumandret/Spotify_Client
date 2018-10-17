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

  private parsePlaylist(playlist: any): Playlist {
    return {
      id: playlist.id,
      name: playlist.name,
      collaborative: playlist.collaborative,
      imagesURL: (playlist.images.length > 0) ? playlist.images[0].url : undefined
    }
  }

  private parsePlaylists(playlists: any[]): Playlist[] {
    return playlists.map(playlist => this.parsePlaylist(playlist))
  }

  getAll() {
    return super.getRequest(this.URL)
      .pipe(map(res => this.parsePlaylists(res.items)))
  }
}
