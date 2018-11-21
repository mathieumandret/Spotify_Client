import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AlbumSearchComponent} from './album-search/album-search.component'
import {AlbumDetailsComponent} from './album-details/album-details.component'
import {UiModule} from '../../ui/ui.module'
import {SharedModule} from '../../shared/shared.module'
import {AlbumRoutingModule} from './album-routing.module';
import { PlaylistDialogComponent } from './playlist-dialog/playlist-dialog.component'

@NgModule({
  declarations: [AlbumSearchComponent, AlbumDetailsComponent, PlaylistDialogComponent],
  imports: [
    CommonModule,
    UiModule,
    SharedModule,
    AlbumRoutingModule
  ],
  entryComponents: [PlaylistDialogComponent]
})
export class AlbumModule {
}
