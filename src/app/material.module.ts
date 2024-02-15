import {NgModule} from '@angular/core';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from '@angular/material/button';
//TODO: удалить ангуляр материал

@NgModule({
  declarations: [],
  exports: [
    MatSlideToggleModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
