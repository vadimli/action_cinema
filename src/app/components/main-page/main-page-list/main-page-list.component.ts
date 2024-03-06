import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {ActivatedRoute, Params} from "@angular/router";
import {ReplaySubject, takeUntil} from "rxjs";
import {CarouselConfigItem, MAIN_PAGE_CONFIG} from "../main-page.config";
import {IApiResponse} from "../../../shared/models/api-response";
import {IFilm} from "../../../shared/models/films/film";

@Component({
  selector: 'app-main-page-list',
  templateUrl: './main-page-list.component.html',
  styleUrl: './main-page-list.component.scss'
})
export class MainPageListComponent implements OnInit, OnDestroy{

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);
  public movies: IFilm[] = [];
  public activeSelection: CarouselConfigItem;
  private limit = 24;
  private page = 1;
  public showSpinner = true;


  constructor(private _movieService: MovieService,
              private route: ActivatedRoute) {
  }


  public ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe((value: Params) => {
        this.activeSelection = MAIN_PAGE_CONFIG.find((item: CarouselConfigItem) => item.query === value['type'])
      });
  }

  public getMovies(limit: number, page: number): void {
    this._movieService.getMovieByOptions(this.activeSelection.url, limit ,page)
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
