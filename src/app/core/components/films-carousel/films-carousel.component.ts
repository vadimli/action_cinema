import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {ReplaySubject, takeUntil} from "rxjs";
import {IApiResponse} from "../../../shared/models/api-response";
import {IFilm} from "../../../shared/models/films/film";
import {IShortFilmInfo} from "../../../shared/models/films/short-film-info";
import {CarouselConfigItem} from "../../../components/main-page/main-page.config";
import {PlatformService} from "../../../shared/services/platform.service";

export interface ResponsiveOptions {
  breakpoint: string,
  numVisible: number,
  numScroll: number
}


@Component({
  selector: 'app-films-carousel',
  templateUrl: './films-carousel.component.html',
  styleUrl: './films-carousel.component.scss'
})
export class FilmsCarouselComponent implements OnInit, OnDestroy {

  @Input() public selectionFilms: CarouselConfigItem;
  @Input() public amountItem = 8;

  public movies: IFilm[] | IShortFilmInfo[];

  public get isDesktop(): boolean {
    return  this._platform.isDesktop();
  }

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  public get getResponsiveOptions(): ResponsiveOptions[] {
    const result: ResponsiveOptions[] = [];
    if (this.selectionFilms.main) {
      result.push({
        breakpoint: '576px',
        numVisible: 1.1,
        numScroll: 1
      });
      result.push({
        breakpoint: '1024px',
        numVisible: 2.1,
        numScroll: 2
      });
      result.push({
        breakpoint: '1200px',
        numVisible: 4,
        numScroll: 2
      });
    } else {
      result.push({
        breakpoint: '576px',
        numVisible: 2.1,
        numScroll: 2
      });
      result.push({
        breakpoint: '1024px',
        numVisible: 4.1,
        numScroll: 2
      });
      result.push({
        breakpoint: '1200px',
        numVisible: 8,
        numScroll: 2
      });
    }

    return result;
  }


  constructor(private _movieService: MovieService, private _platform: PlatformService){}
  public ngOnInit(): void {
    this._movieService.getMovieByOptions(this.selectionFilms.url)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: IApiResponse) => {
        this.movies = value.docs as IFilm[];
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
