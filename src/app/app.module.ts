import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HeaderComponent} from "./components/header/header.component";
import {NgClass} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptors} from "./shared/classes/token.interceptor";
import {MainPageModule} from "./components/main-page/main-page.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgClass,
    HttpClientModule,
    MainPageModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptors
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
