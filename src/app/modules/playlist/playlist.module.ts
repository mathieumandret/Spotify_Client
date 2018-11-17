import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {PlaylistRoutingModule} from './playlist-routing.module'
import {PlaylistListComponent} from './playlist-list/playlist-list.component'
import {SharedModule} from '../../shared/shared.module'
import {UiModule} from '../../ui/ui.module'
import {PlaylistDetailsComponent} from './playlist-details/playlist-details.component'
import {PlaylistCreateComponent} from './playlist-create/playlist-create.component'
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [PlaylistListComponent, PlaylistDetailsComponent, PlaylistCreateComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    SharedModule,
    UiModule,
    ReactiveFormsModule
  ]
})
export class PlaylistModule {
}
