import {Injectable} from '@angular/core'
import {Playlist} from '../models/playlist'
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor() {
  }

  getAll(): Observable<Playlist[]> {
    return of([
      new Playlist(),
      new Playlist(),
      new Playlist()
    ])
  }
}
