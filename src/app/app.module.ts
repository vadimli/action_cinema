import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NgClass } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { KinopoiskTokenInterceptor } from './shared/classes/kinopoisk-token.interceptor';
import { MainPageModule } from './components/main-page/main-page.module';
import { MoviePageModule } from './components/movie-page/movie-page.module';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { PrimengModule } from './primeng.module';
import { FooterComponent } from './components/footer/footer.component';
import { PersonPageModule } from './components/person-page/person-page.module';
import { LayoutModule } from '@angular/cdk/layout';
import { authTokenInterceptor } from './shared/classes/auth-token.interceptor';
import { AuthPageModule } from './components/auth-page/auth-page.module';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CabinetModule } from './components/cabinet/cabinet.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
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
    RouterLinkActive,
    LayoutModule,
    AuthPageModule,
    DynamicDialogModule,
    CabinetModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: KinopoiskTokenInterceptor,
    },
    provideHttpClient(withInterceptors([authTokenInterceptor])),
    DialogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
