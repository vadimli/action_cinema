import {Component, Input, OnInit} from '@angular/core';
import {PersonFullInfo} from "../../../shared/models/person/person-full-info";
import {IShortFilmInfo} from "../../../shared/models/films/short-film-info";

interface TopFilmsConfig {
  title: string;
  films: IShortFilmInfo[];
}

export type Profession = 'actor' | 'director' | 'producer' | 'cameo'

@Component({
  selector: 'app-person-page-detailed',
  templateUrl: './person-page-detailed.component.html',
  styleUrl: './person-page-detailed.component.scss'
})
export class PersonPageDetailedComponent implements  OnInit{
  @Input() public person: PersonFullInfo;

  public topFilms: TopFilmsConfig[] = [];
  constructor() {}

  public ngOnInit(): void {
    this.getTopFilms();
  }

  private getTopFilms(): void {
    const actorFilms: IShortFilmInfo[] = this.filterMoviesForPerson('actor');
    const directorFilms: IShortFilmInfo[] = this.filterMoviesForPerson('director');
    const producerFilms: IShortFilmInfo[] = this.filterMoviesForPerson('producer');

    if (!!actorFilms.length) {
      this.topFilms.push({
        title: 'Актер',
        films: actorFilms
      });
    }
    if (!!directorFilms.length) {
      this.topFilms.push({
        title: 'Режиссер',
        films: directorFilms
      });
    }
    if (!!producerFilms.length) {
      this.topFilms.push({
        title: 'Продюсер',
        films: producerFilms
      });
    }
  }

  private filterMoviesForPerson(profession: Profession): IShortFilmInfo[] {
    return this.person.movies
            .filter((item: IShortFilmInfo) => !!item.rating && item.enProfession === profession)
            .sort((a: IShortFilmInfo, b: IShortFilmInfo) => +b.rating - +a.rating)
            .slice(0, 5);
  }
}
