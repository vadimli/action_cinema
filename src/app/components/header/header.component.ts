import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../shared/services/movie.service";
import {ReplaySubject, takeUntil} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {class: 'header'},
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  public showSearchModal = false;

  constructor(private _movieService: MovieService){}

  public ngOnInit(): void {
    this._movieService.openModal
      .pipe(takeUntil(this.destroy$))
      .subscribe(value =>  {
        this.showSearchModal = value;
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}


