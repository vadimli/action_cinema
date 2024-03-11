import {IFilmPicture} from "./film-picture";

export interface IReviewInfo {
  count?: number | null;
  positiveCount?: number | null;
  percentage?: string | null;
}

export interface ISeasonsInfo {
  number?: number | null;
  episodesCount?: number | null;
}

export interface IWatchability {
  items: IWatchItem[];
}

export interface IWatchItem {
  name?: string | null;
  logo: IFilmPicture;
  url: string;
}

export interface IAudience {
  /*Количество просмотров в кино*/
  count: number

  /*Страна в которой проходил показ*/
  country: string
}

export interface INetwork {
  items: INetworkItem[];
}

export interface INetworkItem {
  name: string;
  logo: IFilmPicture;
}

export interface IFact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface IImagesInfo {
  postersCount?: number;
  backdropsCount?: number;
  framesCount?: number;
}

export interface SearchItem {
  name: string;
  slug: string;
}




