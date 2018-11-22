import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LoadingComponent} from './loading/loading.component'
import {MaterialModule} from '../material/material.module'
import {SearchComponent} from './search/search.component'
import {ResourceListComponent} from './resource-list/resource-list.component'
import {MenuItemComponent} from './menu-item/menu-item.component';
import { PlayerComponent } from './player/player.component'

@NgModule({
  declarations: [LoadingComponent, SearchComponent, ResourceListComponent, MenuItemComponent, PlayerComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SearchComponent, LoadingComponent, ResourceListComponent, MaterialModule, MenuItemComponent, PlayerComponent]
})
export class UiModule {
}
