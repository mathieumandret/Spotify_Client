import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {AlbumSearchComponent} from './album-search/album-search.component'
import {AlbumDetailsComponent} from './album-details/album-details.component'
import {AlbumResolver} from './album-resolver'

const routes: Routes = [
  {path: '', component: AlbumSearchComponent},
  {path: ':id', component: AlbumDetailsComponent, resolve: {album: AlbumResolver}}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AlbumResolver]
})
export class AlbumRoutingModule {
}
