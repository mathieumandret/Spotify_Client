import {Injectable} from '@angular/core'
import {Album} from './shared/models/album'
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'
import {AlbumService} from './shared/service/album.service'

@Injectable()
export class AlbumResolver implements Resolve<Album> {

  constructor(private service: AlbumService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> {
    const id = route.paramMap.get('id')
    if (id === null) {
      throw Error('album id in route is null')
    }
    return this.service.get(id)
  }

}
