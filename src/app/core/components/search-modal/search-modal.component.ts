import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { forkJoin, map, Observable, ReplaySubject, switchMap, takeUntil, tap } from 'rxjs';
import { MovieService } from '../../../shared/services/movie.service';
import { IApiResponse } from '../../../shared/models/api-response';
import { IFilm } from '../../../shared/models/films/film';
import { IPerson } from '../../../shared/models/films/person';

export interface ISerach {
  movies: IFilm[] | null;
  persons: IPerson[] | null;
}

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss',
})
export class SearchModalComponent implements OnInit, OnDestroy {
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  public form: FormGroup;

  public search$: Observable<ISerach | null>;

  public showSpinner = false;

  constructor(private _movieService: MovieService) {}

  public ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(null),
    });

    this.search$ = this.form.get('search').valueChanges.pipe(
      takeUntil(this.destroy$),
      switchMap((value: string) => {
        if (value.length > 2) {
          this.showSpinner = true;

          return forkJoin([
            this._movieService.searchMoviesByName(value),
            this._movieService.searchPersonByName(value),
          ]);
        } else {
          return [];
        }
      }),
      map(([movieRes, personRes]: [IApiResponse<IFilm[]>, IApiResponse<IPerson[]>] | null) => {
        if (personRes?.docs.length) {
          personRes.docs = personRes.docs.filter((item: IPerson) => !!item.photo) as IPerson[];
        }
        return {
          movies: (movieRes?.docs as IFilm[]) ?? null,
          persons: (personRes?.docs as IPerson[]) ?? null,
        } as ISerach;
      }),
      tap(() => (this.showSpinner = false)),
    );
  }

  public clickRoute(): void {
    this._movieService.openModal.next(false);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
