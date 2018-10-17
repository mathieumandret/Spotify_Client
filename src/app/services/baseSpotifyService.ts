import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {LoadingService} from './loading.service'
import {finalize} from 'rxjs/operators'

export class BaseSpotifyService {
  protected BASE_URL = environment.apiURL

  protected constructor(private http: HttpClient, private loadingService: LoadingService, protected URL: string) {
  }

  getRequest(url: string) {
    setTimeout(() => this.loadingService.setLoading(true))
    return this.http.get<any>(this.BASE_URL + url)
      .pipe(
        finalize(() => this.loadingService.setLoading(false))
      )
  }

  search(key: string): Observable<any> {
    return this.getRequest(this.URL + key)
  }
}
