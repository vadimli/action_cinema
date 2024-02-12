import { NgModule } from '@angular/core';
import {MainPageComponent} from "./main-page.component";
import { MainPageCarouselFilmsComponent } from './main-page-carousel-films/main-page-carousel-films.component';
import {RouterLink} from "@angular/router";
import {PrimengModule} from "../../primeng.module";



@NgModule({
  declarations: [MainPageComponent, MainPageCarouselFilmsComponent],
  imports: [RouterLink, PrimengModule],
  exports: [MainPageComponent]
})
export class MainPageModule { }
