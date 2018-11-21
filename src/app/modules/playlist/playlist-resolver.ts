import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'
import {PlaylistService} from './shared/services/playlist.service'
import {Injectable} from '@angular/core'
import {Playlist} from './shared/models/playlist'

@Injectable()
export class PlaylistResolver implements Resolve<Playlist> {

  constructor(private service: PlaylistService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Playlist> {
    const id = route.paramMap.get('id')
    if (id === null) {
      throw Error('Playlist id in route is null')
    }
    return this.service.get(id)
  }

}
