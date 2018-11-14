import {HttpClient, HttpParams} from '@angular/common/http'
import {Resource} from '../models/resource'
import {Deserializer} from '../models/serializers/deserializer'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {environment} from '../../../environments/environment'

export class ResourceReadService<T extends Resource> {

  protected API_URL = environment.API_URL

  constructor(
    protected http: HttpClient,
    protected endpoint: string,
    protected deserializer: Deserializer<T>
  ) {
  }

  get(id: string): Observable<T> {
    return this.http.get<any>(`${this.API_URL}/${this.endpoint}/${id}`)
      .pipe(map(res => this.deserializer.fromJson(res)))
  }

  getAll(): Observable<T[]> {
    return this.http.get<any>(`${this.API_URL}/${this.endpoint}`)
      .pipe(map(res => this.convertData(res.items)))
  }

  search(key: string): Observable<T[]> {
    const params = new HttpParams()
      .set('q', key)
      .set('type', `${this.endpoint.substr(0, this.endpoint.length - 1)}`)
      .set('market', 'FR')
    return this.http.get<any>(`${this.API_URL}/search`, {params})
      .pipe(map(res => this.convertData(res[`${this.endpoint}`].items)))
  }

  protected convertData(jsons: any[]): T[] {
    return jsons.map(json => this.deserializer.fromJson(json))
  }

}
