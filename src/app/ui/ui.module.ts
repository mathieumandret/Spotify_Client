import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {LoadingComponent} from './loading/loading.component'
import {MaterialModule} from '../material/material.module'
import {SearchComponent} from './search/search.component'
import {ResourceListComponent} from './resource-list/resource-list.component'

@NgModule({
  declarations: [LoadingComponent, SearchComponent, ResourceListComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SearchComponent, LoadingComponent, ResourceListComponent, MaterialModule]
})
export class UiModule {
}
