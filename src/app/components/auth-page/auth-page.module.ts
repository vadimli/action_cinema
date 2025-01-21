import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageComponent } from './auth-page.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../../primeng.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AuthPageComponent, LoginComponent, RegisterComponent],
  exports: [AuthPageComponent],
  imports: [CommonModule, ReactiveFormsModule, PrimengModule],
})
export class AuthPageModule {}
