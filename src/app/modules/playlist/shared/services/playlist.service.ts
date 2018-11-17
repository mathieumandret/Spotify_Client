import {Injectable} from '@angular/core'
import {Playlist} from '../models/playlist'
import {Observable} from 'rxjs'
import {ResourceReadService} from '../../../../shared/services/resource-read.service'
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http'
import {PlaylistDeserializer} from '../models/playlist-deserializer'
import {filter, map, switchMap} from 'rxjs/operators'
import {TrackDetails} from '../models/track-details'
import {UserService} from '../../../user/services/user.service'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService extends ResourceReadService<Playlist> {

  constructor(http: HttpClient, private userService: UserService) {
    super(
      http,
      'playlists',
      new PlaylistDeserializer()
    )
  }

  getAll(): Observable<Playlist[]> {
    return this.http.get<any>(`${this.API_URL}/me/${this.endpoint}`)
      .pipe(map(res => this.convertData(res.items)))
  }

  deleteTrack(playlist: Playlist, track: TrackDetails): Observable<void> {
    const body = {tracks: [{uri: `spotify:track:${track.id}`}]}
    const req = new HttpRequest('DELETE', `${this.API_URL}/${this.endpoint}/${playlist.id}/tracks`)
    const reqClone = req.clone({body})
    return this.http.request<void>(reqClone)
      .pipe(
        filter(event => event.type === HttpEventType.Response),
        map(event => (event as HttpResponse<void>).body)
      )
  }

  create(playlist: Playlist): Observable<Playlist> {
    return this.userService.get()
      .pipe(
        map(user => user.id),
        switchMap(id => this.http.post<Playlist>(`${this.API_URL}/users/${id}/playlists`, playlist)),
        map(res => this.deserializer.fromJson(res))
      )
  }

}
