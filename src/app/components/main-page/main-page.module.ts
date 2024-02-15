import { NgModule } from '@angular/core';
import {MainPageComponent} from "./main-page.component";
import { FilmsCarouselComponent } from '../../core/components/films-carousel/films-carousel.component';
import {RouterLink} from "@angular/router";
import {PrimengModule} from "../../primeng.module";



@NgModule({
  declarations: [MainPageComponent, FilmsCarouselComponent],
  imports: [RouterLink, PrimengModule],
  exports: [MainPageComponent]
})
export class MainPageModule { }
