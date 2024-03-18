import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MoviePageComponent} from "./movie-page.component";
import { MoviePageMainInfoComponent } from './movie-page-main-info/movie-page-main-info.component';
import {CoreModule} from "../../core/core.module";
import { MoviePageDetailedComponent } from './movie-page-detailed/movie-page-detailed.component';
import {PrimengModule} from "../../primeng.module";
import {YouTubePlayer} from "@angular/youtube-player";



@NgModule({
  declarations: [
    MoviePageComponent,
    MoviePageMainInfoComponent,
    MoviePageDetailedComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgOptimizedImage,
    PrimengModule,
    YouTubePlayer
  ]
})
export class MoviePageModule { }
