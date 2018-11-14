import {NgModule} from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material'

@NgModule({
  declarations: [],
  exports: [
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatGridListModule,
    MatListModule
  ]
})
export class MaterialModule {
}
