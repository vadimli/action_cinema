import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../shared/services/movie.service";
import {ReplaySubject, takeUntil} from "rxjs";
import {PlatformService} from "../../shared/services/platform.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {class: 'header'},
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);
  public showSearchModal = false;
  public showNavModal = false;

  public get isDesktop(): boolean {
    return  this._platform.isDesktop();
  }

  constructor(private _movieService: MovieService, private _platform: PlatformService){}

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


