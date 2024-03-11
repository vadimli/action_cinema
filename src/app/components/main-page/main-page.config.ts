
import dayjs from "dayjs";
import {SearchItem} from "../../shared/models/films/small-interfaces";

export interface CarouselConfigItem {
  header: string;
  url: string;
  slug: string;
  name?: string;
}

export function getLatestPeriod(): string {
  const endDate: string = dayjs().format('DD.MM.YYYY');
  const startDate: string = dayjs().subtract(4, 'month').format('DD.MM.YYYY');

  return `&premiere.world=${startDate}-${endDate}`;
}

export const MAIN_PAGE_CONFIG: CarouselConfigItem[] = [
  // {
  //   header: 'Новинки',
  //   url: '&rating.kp=6-10&typeNumber=1' + getLatestPeriod(),
  //   slug: 'new'
  // },
  // {
  //   header: 'ТОП-250 Кинопоиска',
  //   url: `&typeNumber=1&lists=top250`,
  //   slug: 'top250',
  // },
  {
    header: 'Драма',
    url: `&typeNumber=1&rating.kp=6.5-10&genres.name=драма`,
    slug: 'драма',
  },
  {
    header: 'Комедия',
    url: `&typeNumber=1&rating.kp=6.5-10&genres.name=комедия`,
    slug: 'комедия'
  },
  // {
  //   header: 'Сериалы',
  //   url: `movie?page=1&limit=15&typeNumber=1&lists=top-100-movies`
  // },
  {
    header: 'Боевик',
    url: `&typeNumber=1&rating.kp=6.5-10&genres.name=боевик`,
    slug: 'боевик'
  },
  // {
  //   header: 'Мультфильмы',
  //   url: `movie?page=1&limit=15&typeNumber=1&lists=top-100-movies`
  // },
  {
    header: 'Фантастика',
    url: `&typeNumber=1&rating.kp=6.5-10&genres.name=фантастика`,
    slug: 'фантастика'
  },
  // {
  //   header: 'Аниме',
  //   url: `movie?page=1&limit=15&typeNumber=1&lists=top-100-movies`
  // },
]

export const GENRES: SearchItem[] = [
  { name: 'Все жанры', slug: '' },
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
