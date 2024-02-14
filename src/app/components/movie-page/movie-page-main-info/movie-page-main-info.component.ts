import {Component, Input, OnInit} from '@angular/core';
import {IFilm} from "../../../shared/models/films/film";


@Component({
  selector: 'app-movie-page-main-info',
  templateUrl: './movie-page-main-info.component.html',
  styleUrl: './movie-page-main-info.component.scss',
})
export class MoviePageMainInfoComponent implements OnInit{

  @Input() public movie: IFilm;

  constructor() {
  }

  public ngOnInit(): void {
  }
}
