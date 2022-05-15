import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/pipes/shorten.pipe';
import { FilterPipe } from './pipes/pipes/filter.pipe';
import { HttpRequestsComponent } from './http-requests/http-requests.component';
import {AuthInterceptorService} from './http-requests/auth-interceptor/auth-interceptor.service'
import { LogginInterCeptorService } from './http-requests/auth-interceptor/Loggin-Interceptor.service';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ReactiveFormsComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpRequestsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:AuthInterceptorService,
    //   multi:true
    // },
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:LogginInterCeptorService,
    //   multi:true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
