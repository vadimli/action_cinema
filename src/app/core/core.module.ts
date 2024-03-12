import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetNameInObjectPipe} from "./pipes/get-name-in-object.pipe";
import { CorrectWordPipe } from './pipes/correct-word.pipe';
import { CheckColorRatingPipe } from './pipes/check-color-rating.pipe';
import { PersonsCarouselComponent } from './components/persons-carousel/persons-carousel.component';
import {CarouselModule} from "primeng/carousel";
import {SharedModule} from "primeng/api";
import {RouterLink} from "@angular/router";
import {GetValueInObjectPipe} from './pipes/get-value-in-object.pipe';
import {FilmsCarouselComponent} from "./components/films-carousel/films-carousel.component";
import { EnterTheViewportNotifierDirective } from './directive/enter-the-viewport-notifier.directive';
import { SearchModalComponent } from './components/search-modal/search-modal.component';
import {PrimengModule} from "../primeng.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    GetNameInObjectPipe,
    CorrectWordPipe,
    CheckColorRatingPipe,
    PersonsCarouselComponent,
    GetValueInObjectPipe,
    FilmsCarouselComponent,
    EnterTheViewportNotifierDirective,
    SearchModalComponent,
  ],
  exports: [
    GetNameInObjectPipe,
    CorrectWordPipe,
    CheckColorRatingPipe,
    PersonsCarouselComponent,
    GetValueInObjectPipe,
    FilmsCarouselComponent,
    EnterTheViewportNotifierDirective,
    SearchModalComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    RouterLink,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
