import {Injectable} from '@angular/core'
import {Album} from './shared/models/album'
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'
import {AlbumService} from './shared/service/album.service'

@Injectable()
export class AlbumResolver implements Resolve<Album> {

  constructor(private service: AlbumService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Album> {
    return this.service.get(route.paramMap.get('id'))
  }

}
