import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {ArtistService} from './shared/services/artist.service'
import {ArtistSearchComponent} from './artist-search/artist-search.component'
import {SharedModule} from '../../shared/shared.module'
import {UiModule} from '../../ui/ui.module'
import {ArtistRoutingModule} from './artist-routing.module'

@NgModule({
  declarations: [ArtistSearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    UiModule,
    ArtistRoutingModule
  ],
  exports: [ArtistSearchComponent],
  providers: [ArtistService]
})
export class ArtistModule {
}
