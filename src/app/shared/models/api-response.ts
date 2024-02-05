import {IShortFilmInfo} from "./films/short-film-info";

/*Ответ API с фильмами*/
export interface IApiResponse {
  docs: IShortFilmInfo[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}
