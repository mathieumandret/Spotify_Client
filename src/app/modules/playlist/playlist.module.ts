import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {PlaylistRoutingModule} from './playlist-routing.module'
import {PlaylistListComponent} from './playlist-list/playlist-list.component'
import {SharedModule} from '../../shared/shared.module'
import {UiModule} from '../../ui/ui.module'

@NgModule({
  declarations: [PlaylistListComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedModule,
    UiModule
  ]
})
export class PlaylistModule {
}
