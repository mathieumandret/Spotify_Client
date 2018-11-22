import {Component} from '@angular/core'
import {MediaMatcher} from '@angular/cdk/layout'
import {NavigationEnd, Router} from '@angular/router'
import {filter, map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMobile: MediaQueryList
  selectedItemTitle!: string

  constructor(private media: MediaMatcher, private router: Router) {
    this.isMobile = media.matchMedia('(max-width: 600px)')
    // S'abonner au changement de route
    this.router.events
      .pipe(
        // Ne garder que les changement finaux
        filter(event => event instanceof NavigationEnd),
        // En recuperer l'url
        map(event => (event as NavigationEnd).url),
        // Ne garder que les url comme '/albums' ou '/playlist'
        map(url => url.split('/')),
        filter(url => url.length === 2),
        map(([_, url]) => url)
      ).subscribe(url => {
      this.selectedItemTitle = this.getActiveTab(url)
    })
  }

  private getActiveTab(url: string): string {
    switch (url) {
      case 'albums':
        return 'Albums'
      case 'playlists':
        return 'Playlists'
      case 'artists':
        return 'Artistes'
      default:
        return 'Accueil'
    }
  }


}
