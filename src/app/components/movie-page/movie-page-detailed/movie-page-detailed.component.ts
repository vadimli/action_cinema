import {Component, Input} from '@angular/core';
import {IFilm} from "../../../shared/models/films/film";

@Component({
  selector: 'app-movie-page-detailed',
  templateUrl: './movie-page-detailed.component.html',
  styleUrl: './movie-page-detailed.component.scss'
})
export class MoviePageDetailedComponent {
  @Input() public movie: IFilm;

}
