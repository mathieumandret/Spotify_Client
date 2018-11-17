import {Route, RouterModule} from '@angular/router'
import {ArtistSearchComponent} from './artist-search/artist-search.component'
import {NgModule} from '@angular/core'

const routes: Route[] = [
  {path: '', component: ArtistSearchComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule {
}
