import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private _isLoading = new Subject<boolean>()

  constructor() { }

  setLoading(loading: boolean) {
    this._isLoading.next(loading)
  }

  isLoading(): Observable<boolean> {
    return this._isLoading.asObservable()
  }

}
