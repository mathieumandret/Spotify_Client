import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

const routes: Routes = [
  {path: 'artists', loadChildren: './modules/artist/artist.module#ArtistModule'},
  {path: 'albums', loadChildren: './modules/album/album.module#AlbumModule'},
  {path: 'playlists', loadChildren: './modules/playlist/playlist.module#PlaylistModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
