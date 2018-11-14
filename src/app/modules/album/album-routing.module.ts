import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {AlbumSearchComponent} from './album-search/album-search.component'
import {AlbumDetailsComponent} from './album-details/album-details.component'

const routes: Routes = [
  {path: '', component: AlbumSearchComponent},
  {path: ':id', component: AlbumDetailsComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule {
}
