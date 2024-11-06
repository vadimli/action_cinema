import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReplaySubject, takeUntil } from 'rxjs';
import { MovieService } from '../../../shared/services/movie.service';
import { IApiResponse } from '../../../shared/models/api-response';
import { IFilm } from '../../../shared/models/films/film';
import { IPerson } from '../../../shared/models/films/person';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss',
})
export class SearchModalComponent implements OnInit, OnDestroy {
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  public form: FormGroup;

  public movies: IFilm[] = [];

  public persons: IPerson[] = [];

  public showSpinner = false;

  constructor(private _movieService: MovieService) {
    this.form = new FormGroup({
      search: new FormControl(null),
    });
  }

  public ngOnInit(): void {
    this.form
      .get('search')
      .valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe((value) => {
        if (value.length > 2) {
          this.showSpinner = true;
          this._movieService
            .searchMoviesByName(value)
            .pipe(takeUntil(this.destroy$))
            .subscribe((res: IApiResponse) => {
              this.movies = res.docs as IFilm[];
              this.showSpinner = false;
            });

          this._movieService
            .searchPersonByName(value)
            .pipe(takeUntil(this.destroy$))
            .subscribe((res: IApiResponse) => {
              const docs: IPerson[] = res.docs as IPerson[];
              this.persons = docs.filter((item: IPerson) => !!item.photo) as IPerson[];
              this.showSpinner = false;
            });
        }
      });
  }

  public clickRoute(): void {
    this._movieService.openModal.next(false);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
