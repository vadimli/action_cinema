import { NgModule } from '@angular/core';
import {MainPageComponent} from "./main-page.component";
import {RouterLink} from "@angular/router";
import {PrimengModule} from "../../primeng.module";
import {CoreModule} from "../../core/core.module";
import { MainPageListComponent } from './main-page-list/main-page-list.component';
import {NgOptimizedImage} from "@angular/common";



@NgModule({
  declarations: [MainPageComponent, MainPageListComponent],
  imports: [RouterLink, PrimengModule, CoreModule, NgOptimizedImage],
  exports: [MainPageComponent, MainPageListComponent]
})
export class MainPageModule { }
