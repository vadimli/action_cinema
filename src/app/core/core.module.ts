import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetNameInObjectPipe} from "./pipes/get-name-in-object.pipe";
import { CorrectWordPipe } from './pipes/correct-word.pipe';
import { CheckColorRatingPipe } from './pipes/check-color-rating.pipe';
import { PersonsCarouselComponent } from './components/persons-carousel/persons-carousel.component';
import {CarouselModule} from "primeng/carousel";
import {SharedModule} from "primeng/api";
import {SkeletonModule} from "primeng/skeleton";
import {RouterLink} from "@angular/router";
import { GetValueInObjectPipe } from './pipes/get-value-in-object.pipe';



@NgModule({
  declarations: [
    GetNameInObjectPipe,
    CorrectWordPipe,
    CheckColorRatingPipe,
    PersonsCarouselComponent,
    GetValueInObjectPipe
  ],
    exports: [
        GetNameInObjectPipe,
        CorrectWordPipe,
        CheckColorRatingPipe,
        PersonsCarouselComponent,
        GetValueInObjectPipe
    ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    SkeletonModule,
    RouterLink
  ]
})
export class CoreModule { }
