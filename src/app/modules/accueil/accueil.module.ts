import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {AccueilComponent} from './accueil/accueil.component'
import {AccueilRoutingModule} from './accueil-routing.module'
import {UiModule} from '../../ui/ui.module'

@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    UiModule
  ]
})
export class AccueilModule {
}
