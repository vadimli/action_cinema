import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../../shared/services/movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { GENRES, RATINGS } from '../main-page.config';
import { IApiResponse } from '../../../shared/models/api-response';
import { IFilm } from '../../../shared/models/films/film';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchItem } from '../../../shared/models/films/small-interfaces';
import { generateUrlForParams } from '../../../core/utils/generate-url-for-params';
import { generateMovieListHeader } from '../../../core/utils/generate-movie-list-header';
import { getCurrentYearList } from '../../../core/utils/get-current-year-list';
import { PlatformService } from '../../../shared/services/platform.service';

export interface FilmListRequest {
  type: string;
  genre: string;
  rating: string;
  years: string;
  topKp: boolean;
}

export interface FilmFilters {
  genres: SearchItem;
  rating: SearchItem;
  years: SearchItem;
  topKp: boolean;
}

@Component({
  selector: 'app-main-page-list',
  templateUrl: './main-page-list.component.html',
  styleUrl: './main-page-list.component.scss',
})
export class MainPageListComponent implements OnInit, OnDestroy {
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  public movies: IFilm[] = [];

  public limit = 24;
  private page = 1;
  public showSpinner = true;
  public header: string;
  public notFound = false;
  public showMovie = false;
  public showFiltersModal = false;

  public form: FormGroup;
  public genres: SearchItem[] = GENRES;
  public ratings: SearchItem[] = RATINGS;
  public years: SearchItem[] = getCurrentYearList();

  public url = '';

  public get isLargeMobile(): boolean {
    return this._platform.isLargeMobile();
  }

  constructor(
    private _movieService: MovieService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _platform: PlatformService,
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.setFormValuesFromQueryParams();

    this.subscribeToQueryParams();
    this.subscribeToFormChanges();
  }

  /**
   * Инициализация формы.
   */
  private initForm(): void {
    this.form = new FormGroup({
      genres: new FormControl(),
      rating: new FormControl(),
      years: new FormControl(),
      topKp: new FormControl(false),
    });
  }

  /**
   * Устанавливает значения формы на основе queryParams.
   */
  private setFormValuesFromQueryParams(): void {
    const queryParams = this._route.snapshot.queryParams;
    this.form.patchValue({
      genres: this.genres.find((item: SearchItem) => item.slug === queryParams['genre']),
      rating: this.ratings.find((item: SearchItem) => item.slug === queryParams['rating']),
      years: this.years.find((item: SearchItem) => item.slug === queryParams['years']),
      topKp: !!queryParams['topKp'],
    });
  }

  /**
   * Подписывается на изменения queryParams для обновления списка фильмов.
   */
  private subscribeToQueryParams(): void {
    this._route.queryParams.pipe(takeUntil(this.destroy$)).subscribe((params: Params) => {
      const request: FilmListRequest = {
        type: this._route.snapshot.url[0].path,
        genre: params['genre'],
        rating: params['rating'],
        years: params['years'],
        topKp: params['topKp'],
      };

      this.header = generateMovieListHeader(request);
      this.url = generateUrlForParams(request);

      this.movies = [];
      this.getMovies(this.limit, this.page);
    });
  }

  /**
   * Подписывается на изменения формы для обновления queryParams (только для больших экранов).
   */
  private subscribeToFormChanges(): void {
    if (!this.isLargeMobile) {
      this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((value: FilmFilters) => {
        const queryParams: Params = {
          type: value.genres?.slug,
          rating: value.rating?.slug,
          years: value.years?.slug,
          topKp: value.topKp,
        };

        this._router.navigate([], { queryParams });
      });
    }
  }

  /**
   * Загружает фильмы по заданным параметрам.
   * @param limit - Количество фильмов на странице.
   * @param page - Номер страницы.
   */
  private getMovies(limit: number, page: number): void {
    this._movieService
      .getMovieByOptions(this.url, limit, page)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: IApiResponse<IFilm[]>) => {
        this.showSpinner = !!response.docs.length;

        const newMovies: IFilm[] = response.docs;
        this.movies = this.movies.concat(
          newMovies.filter(
            (item: IFilm) =>
              !this.movies.some((film: IFilm) => film.id === item.id) && !!item.poster.url,
          ),
        );

        this.notFound = !this.movies.length;
      });
  }

  /**
   * Обрабатывает событие скролла для подгрузки новых фильмов.
   * @param event - Событие скролла.
   */
  public onScroll(event: unknown): void {
    if (event) {
      this.page++;
      this.getMovies(this.limit, this.page);
    }
  }

  /**
   * Сбрасывает форму.
   */
  public formReset(): void {
    this.form.reset();
  }

  /**
   * Применяет фильтры и обновляет queryParams.
   */
  public submit(): void {
    const formValue: FilmFilters = this.form.value;
    const queryParams: Params = {
      type: formValue.genres?.slug,
      rating: formValue.rating?.slug,
      years: formValue.years?.slug,
      topKp: formValue.topKp,
    };

    this._router.navigate([], { queryParams });
    this.showFiltersModal = false;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
