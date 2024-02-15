import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {ReplaySubject, takeUntil} from "rxjs";
import {MainPageConfigItem} from "../../../components/main-page/main-page.config";
import {IApiResponse} from "../../../shared/models/api-response";
import {IFilm} from "../../../shared/models/films/film";
import {IShortFilmInfo} from "../../../shared/models/films/short-film-info";


@Component({
  selector: 'app-films-carousel',
  templateUrl: './films-carousel.component.html',
  styleUrl: './films-carousel.component.scss'
})
export class FilmsCarouselComponent implements OnInit, OnDestroy {

  @Input() public selectionFilms: MainPageConfigItem;

  public movie: IFilm[] | IShortFilmInfo[];
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);


  constructor(private _movieService: MovieService){}
  ngOnInit(): void {
    if (!!this.selectionFilms.url) {
      this._movieService.getMovieByOptions(this.selectionFilms.url).pipe(takeUntil(this.destroy$)).subscribe((value: IApiResponse) => {
        this.movie = value.docs;
      });
    }

    this.movie = this.selectionFilms.docs;

  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
