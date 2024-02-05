import { NgModule } from '@angular/core';
import {MainPageComponent} from "./main-page.component";
import { MainPageCarouselFilmsComponent } from './main-page-carousel-films/main-page-carousel-films.component';
import {CarouselModule} from "primeng/carousel";



@NgModule({
  declarations: [MainPageComponent, MainPageCarouselFilmsComponent],
  imports: [CarouselModule],
  exports: [MainPageComponent]
})
export class MainPageModule { }
