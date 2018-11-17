import {NgModule} from '@angular/core'
import {Route, RouterModule} from '@angular/router'
import {AccueilComponent} from './accueil/accueil.component'

const routes: Route[] = [
  {path: '', component: AccueilComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccueilRoutingModule {
}
