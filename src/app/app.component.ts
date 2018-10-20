import {Component, OnInit, ViewEncapsulation} from '@angular/core'
import {LoadingService} from './services/loading.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  isLoading = false

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.loadingService.isLoading().subscribe(loading => {
      this.isLoading = loading
    })
  }

}
