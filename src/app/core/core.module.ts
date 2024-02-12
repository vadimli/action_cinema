import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GetNameInObjectPipe} from "./pipes/get-name-in-object.pipe";
import { CorrectWordPipe } from './pipes/correct-word.pipe';
import { CheckColorRatingPipe } from './pipes/check-color-rating.pipe';



@NgModule({
  declarations: [
    GetNameInObjectPipe,
    CorrectWordPipe,
    CheckColorRatingPipe
  ],
  exports: [
    GetNameInObjectPipe,
    CorrectWordPipe,
    CheckColorRatingPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
