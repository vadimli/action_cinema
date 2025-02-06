import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthForm } from '../register/register.component';
import { AuthService } from '../../../shared/services/auth.service';
import { catchError, of, ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

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
    private _authService: AuthService,
  ) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  public submit(): void {
    const { login, password }: AuthForm = this.form.value as AuthForm;

    this._authService
      .login(login, password)
      .pipe(
        takeUntil(this.destroy$),
        catchError((error: unknown) => {
          console.log(error);
          this.form.enable();
          return of(null);
        }),
      )
      .subscribe(() => {
        this._router.navigate(['/cabinet']);
      });
  }

  public navigateToRegister(): void {
    this._router.navigate(['/auth'], {
      queryParams: {
        form: 'register',
      },
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
