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
    return this.service.get(route.paramMap.get('id'))
  }

}
