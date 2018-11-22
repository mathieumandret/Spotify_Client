import {NgModule} from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSliderModule,
  MatSnackBarModule,
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
    MatListModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSliderModule
  ]
})
export class MaterialModule {
}
