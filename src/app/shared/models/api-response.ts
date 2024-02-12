import {IFilm} from "./films/film";

/*Ответ API с фильмами*/
export interface IApiResponse {
  docs: IFilm[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}
