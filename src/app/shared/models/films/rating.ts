
/*Рейтинги от различных порталов*/
export interface IRating {

  /*кинопоиск*/
  kp?: number | null | string;

  /*IMDB*/
  imdb?: number | null;

  /*TMDB*/
  tmdb?: number | null;

  /*кинокритиков*/
  filmCritics?: number | null;

  /*кинокритиков из РФ*/
  russianFilmCritics?: number | null;

  /*основанный на ожиданиях пользователей*/
  await?: number | null;
}
