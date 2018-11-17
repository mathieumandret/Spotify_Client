import {Injectable} from '@angular/core'
import {Album} from './shared/models/album'
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'
import {AlbumDetailsService} from './shared/service/album-details.service'

@Injectable()
export class AlbumResolver implements Resolve<Album> {

  constructor(private service: AlbumDetailsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> {
    return this.service.get(route.paramMap.get('id'))
  }

}
