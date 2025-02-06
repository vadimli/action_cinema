import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, of, ReplaySubject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrl: './cabinet.component.scss',
})
export class CabinetComponent implements OnInit, OnDestroy {
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) {}

  public ngOnInit(): void {}

  public logout(): void {
    this._authService
      .logout()
      .pipe(
        takeUntil(this.destroy$),
        catchError((error: unknown) => {
          console.log(error);
          return of(null);
        }),
      )
      .subscribe(() => {
        this._router.navigate(['/']);
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
