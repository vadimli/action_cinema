import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from "./components/header/header.component";
import {NgClass} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptors} from "./shared/classes/token.interceptor";
import {MainPageModule} from "./components/main-page/main-page.module";
import {MoviePageModule} from "./components/movie-page/movie-page.module";
import {RouterLinkActive, RouterModule} from "@angular/router";
import {CoreModule} from "./core/core.module";
import {PrimengModule} from "./primeng.module";
import {FooterComponent} from "./components/footer/footer.component";
import {PersonPageModule} from "./components/person-page/person-page.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgClass,
    HttpClientModule,
    MainPageModule,
    MoviePageModule,
    RouterModule,
    CoreModule,
    PrimengModule,
    PersonPageModule,
    RouterLinkActive
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
