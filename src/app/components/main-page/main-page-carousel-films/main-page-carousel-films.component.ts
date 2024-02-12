import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {Observable} from "rxjs";
import {IShortFilmInfo} from "../../../shared/models/films/short-film-info";
import {IApiResponse} from "../../../shared/models/api-response";


@Component({
  selector: 'app-main-page-carousel-films',
  templateUrl: './main-page-carousel-films.component.html',
  styleUrl: './main-page-carousel-films.component.scss'
})
export class MainPageCarouselFilmsComponent implements OnInit {

  public latestMovie$: Observable<IApiResponse> = new Observable();

  constructor(private _movieService: MovieService){}
  ngOnInit(): void {
    this.latestMovie$ = this._movieService.getLatestMovie();
  }
}
