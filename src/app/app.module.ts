import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module'
import { SpotifyService } from './services/spotify.service'
import { ListeAlbumComponent } from './liste-album/liste-album.component'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component'
import { RouterModule } from '@angular/router'
import { routes } from './app.routing';
import { ListeChanteursComponent } from './liste-chanteurs/liste-chanteurs.component';
import { DetailAlbumComponent } from './detail-album/detail-album.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    ListeAlbumComponent,
    AccueilComponent,
    ListeChanteursComponent,
    DetailAlbumComponent,
    ImageCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }