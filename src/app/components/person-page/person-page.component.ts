import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, ReplaySubject, takeUntil} from "rxjs";
import {IFilm} from "../../shared/models/films/film";
import {MovieService} from "../../shared/services/movie.service";
import {ActivatedRoute, Params} from "@angular/router";
import {IPerson} from "../../shared/models/films/person";
import {PersonFullInfo} from "../../shared/models/person/person-full-info";
import {IAwardRequest, INominationInfo} from "../../shared/models/person/award";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.scss'
})
export class PersonPageComponent implements OnInit, OnDestroy{

  public person$: Observable<PersonFullInfo> = new Observable<PersonFullInfo>();
  public personAwards: INominationInfo[];
  private destroy$: ReplaySubject<void> = new ReplaySubject<void>(1);

  constructor(private _movieService: MovieService,
              private route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.route.params.pipe(takeUntil(this.destroy$))
      .subscribe((value: Params) => {
        this.person$ = this._movieService.getPersonById(value['id']);
        this._movieService.getPersonAwards(value['id'])
          .pipe(takeUntil(this.destroy$))
          .subscribe((value: IAwardRequest) => {
            this.personAwards = value.docs;
      });
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
