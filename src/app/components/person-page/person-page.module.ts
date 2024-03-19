import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonPageComponent} from "./person-page.component";
import { PersonPageMainInfoComponent } from './person-page-main-info/person-page-main-info.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {CoreModule} from "../../core/core.module";
import {PersonPageDetailedComponent} from "./person-page-detailed/person-page-detailed.component";
import {DividerModule} from "primeng/divider";
import {TabViewModule} from "primeng/tabview";
import {RouterLink} from "@angular/router";
import {LayoutModule} from "@angular/cdk/layout";




@NgModule({
  declarations: [
    PersonPageComponent,
    PersonPageMainInfoComponent,
    PersonPageDetailedComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    CoreModule,
    DividerModule,
    TabViewModule,
    RouterLink,
    LayoutModule
  ]
})
export class PersonPageModule { }
