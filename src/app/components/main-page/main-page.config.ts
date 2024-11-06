import dayjs from 'dayjs';
import { SearchItem } from '../../shared/models/films/small-interfaces';

export interface CarouselConfigItem {
  header?: string;
  url: string;
  genre?: string;
  name?: string;
  main?: boolean;
  topKp?: boolean;
  years?: string;
}

export function getLatestPeriod(): string {
  // const endDate: string = dayjs().format('DD.MM.YYYY');
  // const startDate: string = dayjs().subtract(1, 'year').format('DD.MM.YYYY');

  // return `&premiere.world=${startDate}-${endDate}`;
  return `&year=${dayjs().year()}`;
}

export const MAIN_PAGE_CONFIG: CarouselConfigItem[] = [
  {
    url: '&rating.kp=7-10' + getLatestPeriod(),
    main: true,
  },
  {
    header: 'Новинки',
    url: `&typeNumber=1&year=${dayjs().year() - 1}-${dayjs().year()}&rating.kp=6-10`,
    years: `${dayjs().year() - 1}-${dayjs().year()}`,
  },
  {
    header: 'ТОП-250 Кинопоиска',
    url: `&typeNumber=1&lists=top250`,
    topKp: true,
  },
  {
    header: 'Драма',
    url: `&typeNumber=1&rating.kp=6.5-10&genres.name=драма&rating`,
    genre: 'драма',
  },
  {
    header: 'Комедия',
    url: `&typeNumber=1&rating.kp=6.5-10&genres.name=комедия&rating`,
    genre: 'комедия',
  },
  {
    header: 'Боевик',
    url: `&typeNumber=1&rating.kp=6.5-10&genres.name=боевик&rating`,
    genre: 'боевик',
  },
  {
    header: 'Фантастика',
    url: `&typeNumber=1&rating.kp=6.5-10&genres.name=фантастика&rating`,
    genre: 'фантастика',
  },
];

/*Список жанров*/
export const GENRES: SearchItem[] = [
  { name: 'Жанры', slug: '' },
  { name: 'Семейные', slug: 'семейный' },
  { name: 'Биографии', slug: 'биография' },
  { name: 'Боевики', slug: 'боевик' },
  { name: 'Вестерны', slug: 'вестерн' },
  { name: 'Военные', slug: 'военный' },
  { name: 'Детективы', slug: 'детектив' },
  { name: 'Детские', slug: 'детский' },
  { name: 'Документальные', slug: 'документальный' },
  { name: 'Драмы', slug: 'драма' },
  { name: 'Исторические', slug: 'история' },
  { name: 'Комедии', slug: 'комедия' },
  { name: 'Короткометражки', slug: 'короткометражка' },
  { name: 'Криминал', slug: 'криминал' },
  { name: 'Мелодрамы', slug: 'мелодрама' },
  { name: 'Музыкальные', slug: 'музыка' },
  { name: 'Мюзиклы', slug: 'мюзикл' },
  { name: 'Новости', slug: 'новости' },
  { name: 'Приключения', slug: 'приключения' },
  { name: 'Спортивные', slug: 'спорт' },
  { name: 'Триллеры', slug: 'триллер' },
  { name: 'Ужасы', slug: 'ужасы' },
  { name: 'Фантастика', slug: 'фантастика' },
  { name: 'Фильмы-нуар', slug: 'фильм-нуар' },
  { name: 'Фэнтези', slug: 'фэнтези' },
];

/*Рейтинги*/
export const RATINGS: SearchItem[] = [
  { name: 'Рейтинг', slug: '' },
  { name: 'от 8', slug: '8-10' },
  { name: 'от 7', slug: '7-10' },
  { name: 'от 6', slug: '6-10' },
];
