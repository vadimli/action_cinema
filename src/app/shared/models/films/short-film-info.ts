import {INames} from "./names";
import {IFilmPicture} from "./film-picture";
import {TypeFilm} from "./enum/type-film";
import {IRating} from "./rating";
import {IReleaseYears} from "./release-years";


/*Короткая информация о фильме, необходимая для отрисовки превью */
export interface IShortFilmInfo {
  /*ID фильма*/
  id: number;

  /*Страна производства*/
  countries: INames[];

  /*Жанр*/
  genres: INames[];

  /*Название в разных странах*/
  names: INames[];

  /*Альтернативное название*/
  alternativeName: string;

  /*Описание фильма*/
  description: string;

  /*Название на английском*/
  enName: string;

  /*Длина фильма*/
  movieLength: number;

  /*Название на русском*/
  name: string;

  /*Постеры*/
  poster: IFilmPicture;

  /*Рейтинги фильма*/
  rating: IRating;

  /*Рейтинги фильма от МПАА*/
  ratingMpaa: number;

  /*Короткое описание фильма*/
  shortDescription: string;

  /*Статус*/
  status: string;

  /*Билеты в продаже*/
  ticketsOnSale: boolean;

  /*Тип фильма*/
  type: string;

  /*Код типа фильма*/
  typeNumber: TypeFilm;

  /*Количество голосов в рейтинге*/
  votes: IRating;

  /*Год выпуска*/
  year: number;

  /*Возрастной рейтинг*/
  ageRating: string;

  /*Картинки для фона*/
  backdrop: IFilmPicture;

  /*Логотип*/
  logo: IFilmPicture;

  /*Даты релизов*/
  releaseYears: IReleaseYears[];

  /*Топ 10*/
  top10: number;

  /*Топ 250*/
  top250: number;

  /*Флаг сериала*/
  isSeries: boolean;

  /*Длина серии*/
  seriesLength: number;

  /*Длина всех серий*/
  totalSeriesLength: number;
}
