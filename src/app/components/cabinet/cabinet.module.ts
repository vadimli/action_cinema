import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { Button } from 'primeng/button';

@NgModule({
  declarations: [CabinetComponent],
  imports: [CommonModule, Button],
})
export class CabinetModule {}
