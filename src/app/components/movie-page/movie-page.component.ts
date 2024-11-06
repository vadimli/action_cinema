import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../shared/services/movie.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IFilm } from '../../shared/models/films/film';
import { Observable, ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent implements OnInit, OnDestroy {
  public movie$: Observable<IFilm> = new Observable<IFilm>();

  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(
    private _movieService: MovieService,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((value: Params) => {
      this.movie$ = this._movieService.getMovieById(value['id']);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
