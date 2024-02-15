import {ISpouse} from "./spouse";
import {IShortFilmInfo} from "../films/short-film-info";


/*Полная инфо о персоне*/
export interface PersonFullInfo {
  /*ID персоны*/
  id: number;

  /*Имя русском*/
  name?: string;

  /*Имя на англ*/
  enName?: string;

  /*Фото*/
  photo?: string;

  /*Пол*/
  sex?: string;

  /*Рост*/
  growth?: number;

  /*Дата рождения*/
  birthday?: string;

  /*Дата смерти*/
  death?: string;

  /*Возраст*/
  age?: number;

  /*Место рождения*/
  birthPlace?: ValueINfo[];

  /*Место смерти*/
  deathPlace?: ValueINfo[];

  /*Супруги*/
  spouses: ISpouse[];

  /*Количество наград*/
  countAwards: string;

  /*Профессии*/
  profession: ValueINfo[];

  /*Факты*/
  facts: ValueINfo[];

  /*Фильмы*/
  movies?: IShortFilmInfo[];

  /*Дата обновления*/
  updatedAt: string;

  /*Дата создания*/
  createdAt: string;
}

export interface ValueINfo {
  value: string;
}
