import {IShortFilmInfo} from "./short-film-info";
import {IPerson} from "./person";
import {ImagesInfo} from "./images-info";
import {IFees} from "./fees";
import {ISumValue} from "./sum-value";
import {IExternalId} from "./external-id";
import {IVideo} from "./video";
import {INames} from "./names";
import {IFilmPicture} from "./film-picture";
import {IRating} from "./rating";
import {TypeFilm} from "./enum/type-film";
import {IReleaseYears} from "./release-years";
import {IAudience, IFact, IImagesInfo, INetwork, IReviewInfo, ISeasonsInfo, IWatchability} from "./small-interfaces";
import {IPremiere} from "./premiere";

export interface IFilm {
  /*ID фильма*/
  id: number;

  /*Внешний ID*/
  externalId: IExternalId;

  /*Название на русском*/
  name?: string;

  /*Альтернативное название*/
  alternativeName?: string;

  /*Название на английском*/
  enName?: string;

  /*Название в разных странах*/
  names: INames[];

  /*Тип фильма*/
  type: string;

  /*Код типа фильма*/
  typeNumber: TypeFilm;

  /*Год выпуска*/
  year?: number | null;

  /*Описание фильма*/
  description?: string | null;

  /*Короткое описание фильма*/
  shortDescription?: string | null;

  /*Слоган*/
  slogan?: string | null;

  /*Статус релиза тайтла.*/
  status?: 'filming' | 'pre-production' | 'completed' | 'announced' | 'post-production';

  /*Рейтинги фильма*/
  rating?: IRating;

  /*Количество голосов в рейтинге*/
  votes?: IRating;

  /*Длина фильма*/
  movieLength?: number | null;

  /*Возрастной рейтинг по MPAA*/
  ratingMpaa?: string;

  /*Возрастной рейтинг*/
  ageRating?: number | null;

  /*Логотип*/
  logo?: IFilmPicture;

  /*Постеры*/
  poster?: IFilmPicture;

  /*Картинки для фона*/
  backdrop?: IFilmPicture;

  /*Тизеры и трейлеры*/
  videos?: IVideo;

  /*Жанр*/
  genres?: INames[];

  /*Страна производства*/
  countries?: INames[];

  /*Съемочная группа*/
  persons?: IPerson[];

  /*Информация о рецензиях*/
  reviewInfo?: IReviewInfo;

  /*Информация о сезонах*/
  seasonsInfo?: ISeasonsInfo[];

  /*Бюджет*/
  budget?: ISumValue;

  /*Сборы*/
  fees?: IFees;

  /*Премьеры*/
  premiere?: IPremiere;

  /*Похожие фильмы*/
  similarMovies?: IShortFilmInfo[];

  /*Сиквелы и приквелы*/
  sequelsAndPrequels?: IShortFilmInfo[];

  /*Смотрибельность*/
  watchability?: IWatchability;

  /*Даты релизов*/
  releaseYears?: IReleaseYears[];

  /*Топ 10. Чтобы найти фильмы участвующие в рейтинге используйте: !null*/
  top10?: number | null;

  /*Топ 250. Чтобы найти фильмы участвующие в рейтинге используйте: !null*/
  top250?: number | null;

  /*Билеты в продаже*/
  ticketsOnSale?: boolean | null;

  /*Длина всех серий*/
  totalSeriesLength?: number | null;

  /*Средняя длина серии*/
  seriesLength?: number | null;

  /*Флаг сериала*/
  isSeries: boolean;

  /*Аудитория*/
  audience?: IAudience[] | null;

  /*Список коллекций, в которых находится тайтл.*/
  lists?: string[] | null;

  /*Сеть.*/
  networks: INetwork[] | null;

  /*Дата обновления*/
  updatedAt: string;

  /*Дата создания*/
  createdAt: string;

  /*Факты*/
  facts: IFact[];

  /*Информация об изображениях*/
  imagesInfo: IImagesInfo;

  /*Коллекции*/
  collections?: unknown[],

  /*Производственные компании*/
  productionCompanies?: unknown[],

  /*Языки в фильме*/
  spokenLanguages?: unknown[],

  /*Языки в фильме*/
  technology?: unknown,

  /*Дата удаления*/
  deletedAt: string;

  apiPicture?: string;

}
