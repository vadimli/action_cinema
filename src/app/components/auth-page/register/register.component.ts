import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;

  public get repeatPasswordInvalid(): boolean {
    return this.form?.hasError('repeatPasswordInvalid');
  }

  public get login(): AbstractControl {
    return this.form?.get('login');
  }

  public get password(): AbstractControl {
    return this.form?.get('password');
  }

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
  ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        login: [null, Validators.required],
        password: [null, Validators.required],
        repeatPassword: [null, Validators.required],
      },
      { validators: [this._repeatPasswordValidator()] },
    );
  }

  public submit(): void {}

  public navigateToLogin(): void {
    this._router.navigate(['/auth'], {
      queryParams: {
        form: 'login',
      },
    });
  }

  private _repeatPasswordValidator(): ValidatorFn {
    return (formCtrl: AbstractControl): ValidationErrors | null => {
      const password: string = formCtrl?.get('password')?.value as string;
      const repeatPassword: string = formCtrl?.get('repeatPassword')?.value as string;

      if (!!password && !!repeatPassword) {
        return password === repeatPassword ? null : { repeatPasswordInvalid: true };
      }

      return null;
    };
  }
}
