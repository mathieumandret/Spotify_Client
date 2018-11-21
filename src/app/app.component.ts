import {Component} from '@angular/core'
import {MediaMatcher} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile: MediaQueryList

  constructor(private media: MediaMatcher) {
    this.isMobile = media.matchMedia('(max-width: 600px)')
  }


}
