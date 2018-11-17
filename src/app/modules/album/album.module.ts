import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {AlbumRoutingModule} from './album-routing.module'
import {AlbumSearchComponent} from './album-search/album-search.component'
import {AlbumDetailsComponent} from './album-details/album-details.component'
import {UiModule} from '../../ui/ui.module'
import {SharedModule} from '../../shared/shared.module'
import {MaterialModule} from '../../material/material.module'

@NgModule({
  declarations: [AlbumSearchComponent, AlbumDetailsComponent],
  imports: [
    CommonModule,
    UiModule,
    SharedModule,
    AlbumRoutingModule,
    MaterialModule
  ]
})
export class AlbumModule {
}
