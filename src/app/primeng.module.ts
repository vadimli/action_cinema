import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { SkeletonModule } from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [],
  exports: [
    CarouselModule,
    DividerModule,
    ButtonModule,
    TabViewModule,
    SkeletonModule,
    ProgressSpinnerModule,
    DropdownModule,
    CheckboxModule,
    SidebarModule,
    InputTextModule,
    DialogModule,
  ],
})
export class PrimengModule {}
