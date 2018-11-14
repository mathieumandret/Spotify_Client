import {ResourceReadService} from '../../services/resource-read.service'
import {Resource} from '../../models/resource'
import {Observable} from 'rxjs'

export class ResourceSearch<T extends Resource> {

  results$?: Observable<T[]>

  constructor(private service: ResourceReadService<T>) {
  }

  search(key: string) {
    this.results$ = this.service.search(key)
  }


}
