import { Component, Input, OnInit } from '@angular/core';
import { PersonFullInfo } from '../../../shared/models/person/person-full-info';
import { IShortFilmInfo } from '../../../shared/models/films/short-film-info';
import { INominationInfo } from '../../../shared/models/person/award';

interface TopFilmsConfig {
  title: string;
  films: IShortFilmInfo[];
}

interface AwardsConfig {
  title: string;
  nominations: INominationInfo[];
}

export type Profession = 'actor' | 'director' | 'producer' | 'cameo';
export type Award = 'Оскар' | 'Золотой глобус';

@Component({
  selector: 'app-person-page-detailed',
  templateUrl: './person-page-detailed.component.html',
  styleUrl: './person-page-detailed.component.scss',
})
export class PersonPageDetailedComponent implements OnInit {
  @Input() public person: PersonFullInfo;

  @Input() public personAwards: INominationInfo[];

  public topFilms: TopFilmsConfig[] = [];

  public awards: AwardsConfig[] = [];

  public ngOnInit(): void {
    this.getTopFilms();
    this.getawards();
  }

  private getTopFilms(): void {
    const actorFilms: IShortFilmInfo[] = this.filterMoviesForPerson('actor');
    const directorFilms: IShortFilmInfo[] = this.filterMoviesForPerson('director');
    const producerFilms: IShortFilmInfo[] = this.filterMoviesForPerson('producer');

    if (actorFilms.length) {
      this.topFilms.push({
        title: 'Актер',
        films: actorFilms,
      });
    }
    if (directorFilms.length) {
      this.topFilms.push({
        title: 'Режиссер',
        films: directorFilms,
      });
    }
    if (producerFilms.length) {
      this.topFilms.push({
        title: 'Продюсер',
        films: producerFilms,
      });
    }
  }

  private getawards(): void {
    const oscarFilms: INominationInfo[] = this.filterAwards('Оскар');
    const goldGlobeFilms: INominationInfo[] = this.filterAwards('Золотой глобус');

    if (oscarFilms.length) {
      this.awards.push({
        title: 'Оскар',
        nominations: oscarFilms,
      });
    }
    if (goldGlobeFilms.length) {
      this.awards.push({
        title: 'Золотой глобус',
        nominations: goldGlobeFilms,
      });
    }
  }

  private filterAwards(award: Award): INominationInfo[] {
    return this.personAwards
      .filter((item: INominationInfo) => item.nomination.award.title === award)
      .sort(
        (a: INominationInfo, b: INominationInfo) =>
          b.nomination.award.year - a.nomination.award.year,
      );
  }

  private filterMoviesForPerson(profession: Profession): IShortFilmInfo[] {
    return this.person.movies
      .filter((item: IShortFilmInfo) => !!item.rating && item.enProfession === profession)
      .sort((a: IShortFilmInfo, b: IShortFilmInfo) => +b.rating - +a.rating)
      .slice(0, 5);
  }
}
