import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {TokenInterceptor} from './interceptors/token-interceptor'
import {LoadingInterceptor} from './interceptors/loading-interceptor'
import {LoadingService} from './services/loading.service'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    LoadingService
  ]
})
export class CoreModule {
}