import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../../../shared/services/movie.service";
import {Observable} from "rxjs";
import {IApiResponse} from "../../../shared/models/api-response";
import {MainPageConfigItem} from "../main-page.config";


@Component({
  selector: 'app-main-page-carousel-films',
  templateUrl: './main-page-carousel-films.component.html',
  styleUrl: './main-page-carousel-films.component.scss'
})
export class MainPageCarouselFilmsComponent implements OnInit {

  @Input() public selectionFilms: MainPageConfigItem;

  public movie$: Observable<IApiResponse> = new Observable();

  constructor(private _movieService: MovieService){}
  ngOnInit(): void {
    this.movie$ = this._movieService.getMovieByOptions(this.selectionFilms.url);
  }
}
