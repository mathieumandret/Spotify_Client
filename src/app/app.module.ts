import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule} from './material/material.module'
import {ListeAlbumComponent} from './liste-album/liste-album.component'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {AccueilComponent} from './accueil/accueil.component'
import {RouterModule} from '@angular/router'
import {routes} from './app.routing'
import {ListeChanteursComponent} from './liste-chanteurs/liste-chanteurs.component'
import {DetailAlbumComponent} from './detail-album/detail-album.component'
import {ImageCardComponent} from './image-card/image-card.component'
import {SearchComponent} from './search/search.component'
import {LoadingService} from './services/loading.service'
import {PlaylistListComponent} from './playlist-list/playlist-list.component'
import {TokenInterceptor} from './auth/token.interceptor'
import {AlbumService} from './services/album.service'
import {TrackService} from './services/track.service'
import {ArtistService} from './services/artist.service'
import {PlaylistService} from './services/playlist.service'
import {PlaylistDetailComponent} from './playlist-detail/playlist-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ListeAlbumComponent,
    AccueilComponent,
    ListeChanteursComponent,
    DetailAlbumComponent,
    ImageCardComponent,
    SearchComponent,
    PlaylistListComponent,
    PlaylistDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AlbumService,
    LoadingService,
    TrackService,
    ArtistService,
    PlaylistService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
