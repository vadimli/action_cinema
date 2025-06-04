import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { ReplaySubject, takeUntil } from 'rxjs';
import { IUser } from './shared/models/auth/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  title = 'Онлайн-кинотеатр Action';

  constructor(private _userService: UserService) {}

  public ngOnInit(): void {
    if (localStorage.getItem('authToken') !== null) {
      this._userService
        .getUserInfo()
        .pipe(takeUntil(this.destroy$))
        .subscribe((value: IUser) => {
          this._userService.setUser(value);
        });
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
