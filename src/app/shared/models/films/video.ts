/*Ссылки на трейлеры и тизеры*/
export interface IVideoUrl {
  /*Url трейлера*/
  url?: string | null;
  name?: string | null;
  site?: string | null;
  type?: string | null;
  size?: number;
}

export interface IVideo {
  trailers?: IVideoUrl[];
  teasers?: IVideoUrl[];
}


