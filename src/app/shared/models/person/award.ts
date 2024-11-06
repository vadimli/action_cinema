import { IShortFilmInfo } from '../films/short-film-info';

export interface IAwardRequest {
  docs: INominationInfo[];

  /*Общее количество результатов*/
  total: number;

  /*Количество результатов на странице*/
  limit: number;

  /*Текущая страница*/
  page: number;

  /*Сколько страниц всего*/
  pages: number;
}

export interface INominationInfo {
  nomination: INomination;
  winning: boolean;
  updatedAt: string;
  createdAt: string;
  personId: number;
  movie: IShortFilmInfo;
}

export interface INomination {
  award: IAward;
  title: string;
}

export interface IAward {
  title: string;
  year: number;
}
