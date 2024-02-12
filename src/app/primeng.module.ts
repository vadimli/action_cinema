import {NgModule} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {DividerModule} from "primeng/divider";
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {SkeletonModule} from 'primeng/skeleton';
import {ProgressSpinnerModule} from 'primeng/progressspinner';



@NgModule({
  declarations: [],
  exports: [
    CarouselModule,
    DividerModule,
    ButtonModule,
    TabViewModule,
    SkeletonModule,
    ProgressSpinnerModule
  ]
})
export class PrimengModule { }
