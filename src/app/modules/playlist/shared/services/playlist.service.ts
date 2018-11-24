import {Injectable} from '@angular/core'
import {Playlist} from '../models/playlist'
import {Observable} from 'rxjs'
import {ResourceReadService} from '../../../../shared/services/resource-read.service'
import {HttpClient, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http'
import {PlaylistDeserializer} from '../models/playlist-deserializer'
import {filter, map} from 'rxjs/operators'
import {UserService} from '../../../user/services/user.service'
import {Track} from '../../../album/shared/models/track'
import {PlaylistSerializer} from '../models/playlist-serializer'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService extends ResourceReadService<Playlist> {

  private serializer = new PlaylistSerializer()

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

  getWritable(): Observable<Playlist[]> {
    return this.getAll()
      .pipe(
        map((playlists) => playlists.filter(p => p.owner && (p.owner.id === this.userService.getCurrentUser().id)))
      )
  }

  deleteTrack(playlist: Playlist, track: Track): Observable<Playlist> {
    const body = {tracks: [{uri: `spotify:track:${track.id}`}]}
    // On est obligé de faire la requête "manuellement" parce que http.delete n'accepte pas de body
    const req = new HttpRequest('DELETE', `${this.API_URL}/${this.endpoint}/${playlist.id}/tracks`)
    // Et de cloner la requête parce que les modification directe de la requête ne sont pas prises en compte
    const reqClone = req.clone({body, reportProgress: false})
    return this.http.request<Playlist>(reqClone)
      .pipe(
        // N'emettre que si la requête est terminée
        filter(event => event.type === HttpEventType.Response),
        // Et en extraire le corps
        map(event => (event as HttpResponse<Playlist>).body)
      ) as Observable<Playlist>
  }

  addTrack(playlist: Playlist, track: Track): Observable<void> {
    const body = {
      uris: [`spotify:track:${track.id}`]
    }
    return this.http.post<void>(`${this.API_URL}/${this.endpoint}/${playlist.id}/tracks`, body)
  }

  create(playlist: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(
      `${this.API_URL}/users/${this.userService.getCurrentUser().id}/playlists`,
      this.serializer.toJson(playlist)
    ).pipe(map(res => this.deserializer.fromJson(res)))
  }

}
