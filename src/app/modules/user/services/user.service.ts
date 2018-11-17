import {Injectable} from '@angular/core'
import {ResourceReadService} from '../../../shared/services/resource-read.service'
import {User} from '../models/user'
import {HttpClient} from '@angular/common/http'
import {UserDeserializer} from '../models/user-deserializer'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService extends ResourceReadService<User> {

  constructor(http: HttpClient) {
    super(
      http,
      'me',
      new UserDeserializer()
    )
  }

  get(): Observable<User> {
    return this.http.get<any>(`${this.API_URL}/${this.endpoint}`)
      .pipe(map(res => this.deserializer.fromJson(res)))
  }
}
