import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ReplaySubject, takeUntil} from "rxjs";
import {GENRES} from "../main-page.config";
import {IApiResponse} from "../../../shared/models/api-response";
import {IFilm} from "../../../shared/models/films/film";
import {FormControl, FormGroup} from "@angular/forms";
import {SearchItem} from "../../../shared/models/films/small-interfaces";
import {generateUrlForParams} from "../../../core/utils/generate-url-for-params";
import {generateMovieListHeader} from "../../../core/utils/generate-movie-list-header";

export interface FilmListRequest {
  type: string,
  genre: string
}

@Component({
  selector: 'app-main-page-list',
  templateUrl: './main-page-list.component.html',
  styleUrl: './main-page-list.component.scss'
})
export class MainPageListComponent implements OnInit, OnDestroy{

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);
  public movies: IFilm[] = [];
  public limit = 24;
  private page = 1;
  public showSpinner = true;
  public header: string;

  public form: FormGroup;
  public genres: SearchItem[] = GENRES;

  public url = '';

  constructor(private _movieService: MovieService,
              private _route: ActivatedRoute,
              private _router: Router) {
  }


  public ngOnInit(): void {
    this.initForm();
    this.form.get('genres').setValue(GENRES.find((item: SearchItem) => item.slug === this._route.snapshot.queryParams['type']));

    this._route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: Params) => {
        const request: FilmListRequest = {
          type: this._route.snapshot.url[0].path,
          genre: value['type']
        }

        this.header = generateMovieListHeader(request)
        this.url = generateUrlForParams(request);

        this.movies = [];

        this.getMovies(24, 1)
      });

    this.form.valueChanges.subscribe(value => {
      this._router.navigate([], { queryParams: { type: value.genres.slug }});
    })
  }

  private getMovies(limit: number, page: number): void {
    this._movieService.getMovieByOptions(this.url, limit ,page)
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: IApiResponse) => {
        if (!value.docs.length) {
          this.showSpinner = false
        }
        value.docs.forEach((item: IFilm) => {
          this.movies.push(item);
        });
      });
  }

  private initForm(): void {
    this.form = new FormGroup({
      genres: new FormControl(null)
    })
  }

  // Метод, который будет подгружать новые данные.
  /**
   * Обновляет параметры загрузки, загружает обновлённые данные
   * @param e Событие - срабатывает в конце списка.
   */
  public onScroll(e: any): void {
    if (e) {
      this.getMovies(this.limit, this.page);
      this.page++;
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
