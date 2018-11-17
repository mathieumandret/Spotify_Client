import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {PlaylistListComponent} from './playlist-list/playlist-list.component'
import {PlaylistDetailsComponent} from './playlist-details/playlist-details.component'
import {PlaylistResolver} from './playlist-resolver'
import {PlaylistCreateComponent} from './playlist-create/playlist-create.component'

const routes: Routes = [
  {path: '', component: PlaylistListComponent},
  {path: 'details/:id', component: PlaylistDetailsComponent, resolve: {playlist: PlaylistResolver}},
  {path: 'new', component: PlaylistCreateComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PlaylistResolver]
})
export class PlaylistRoutingModule {
}
