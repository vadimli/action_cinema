import { NgModule } from '@angular/core';
import {MainPageComponent} from "./main-page.component";
import {RouterLink} from "@angular/router";
import {PrimengModule} from "../../primeng.module";
import {CoreModule} from "../../core/core.module";



@NgModule({
  declarations: [MainPageComponent],
  imports: [RouterLink, PrimengModule, CoreModule],
  exports: [MainPageComponent]
})
export class MainPageModule { }
