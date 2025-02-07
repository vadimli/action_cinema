import { IFilm } from './films/film';
import { IPerson } from './films/person';

/*Ответ API с фильмами*/
export interface IApiResponse<T = IFilm[] | IPerson[]> {
  docs: T;
  limit: number;
  page: number;
  pages: number;
  total: number;
}
