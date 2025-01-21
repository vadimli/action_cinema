import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

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
    this.form = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public submit(): void {}

  public navigateToRegister(): void {
    this._router.navigate(['/auth'], {
      queryParams: {
        form: 'register',
      },
    });
  }
}
