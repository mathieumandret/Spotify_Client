import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {LoadingService} from '../../core/services/loading.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading$!: Observable<boolean>

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.isLoading$ = this.loadingService.getLoading()
  }

}
