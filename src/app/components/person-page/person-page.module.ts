import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonPageComponent} from "./person-page.component";
import { PersonPageMainInfoComponent } from './person-page-main-info/person-page-main-info.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {CoreModule} from "../../core/core.module";



@NgModule({
  declarations: [PersonPageComponent, PersonPageMainInfoComponent],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    CoreModule
  ]
})
export class PersonPageModule { }
