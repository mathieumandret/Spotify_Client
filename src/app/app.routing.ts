import {Routes} from '@angular/router'
import {AccueilComponent} from './accueil/accueil.component'
import {ListeAlbumComponent} from './liste-album/liste-album.component'
import {ListeChanteursComponent} from './liste-chanteurs/liste-chanteurs.component'
import {DetailAlbumComponent} from './detail-album/detail-album.component'
import {PlaylistListComponent} from './playlist-list/playlist-list.component'
import {PlaylistDetailComponent} from './playlist-detail/playlist-detail.component'

export const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'albums', component: ListeAlbumComponent},
  {path: 'chanteurs', component: ListeChanteursComponent},
  {path: 'album/:id', component: DetailAlbumComponent},
  {path: 'playlists', component: PlaylistListComponent},
  {path: 'playlist/:id', component: PlaylistDetailComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'}
]
