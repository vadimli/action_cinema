
import dayjs from "dayjs";

export interface MainPageConfigItem {
  header: string;
  url: string;
}

export function getLatestPeriod(): string {
  const endDate: string = dayjs().format('DD.MM.YYYY');
  const startDate: string = dayjs().subtract(4, 'month').format('DD.MM.YYYY');

  return `&premiere.world=${startDate}-${endDate}`;
}

export const MAIN_PAGE_CONFIG: MainPageConfigItem[] = [
  {
    header: 'Новинки',
    url: 'movie?page=1&limit=15&rating.kp=6-10&typeNumber=1' + getLatestPeriod()
  },
  {
    header: 'ТОП-250 Кинопоиска',
    url: `movie?page=1&limit=15&typeNumber=1&lists=top250`
  },
  {
    header: 'Драмы',
    url: `movie?page=1&limit=15&typeNumber=1&rating.kp=6.5-10&genres.name=%D0%B4%D1%80%D0%B0%D0%BC%D0%B0&lists=!top250`
  },
  {
    header: 'Комедии',
    url: `movie?page=1&limit=15&typeNumber=1&rating.kp=6.5-10&genres.name=%D0%BA%D0%BE%D0%BC%D0%B5%D0%B4%D0%B8%D1%8F&lists=!top250`
  },
  // {
  //   header: 'Сериалы',
  //   url: `movie?page=1&limit=15&typeNumber=1&lists=top-100-movies`
  // },
  {
    header: 'Боевики',
    url: `movie?page=1&limit=15&typeNumber=1&rating.kp=6.5-10&genres.name=%D0%B1%D0%BE%D0%B5%D0%B2%D0%B8%D0%BA&lists=!top250`
  },
  // {
  //   header: 'Мультфильмы',
  //   url: `movie?page=1&limit=15&typeNumber=1&lists=top-100-movies`
  // },
  {
    header: 'Фантастика',
    url: `movie?page=1&limit=15&typeNumber=1&rating.kp=6.5-10&genres.name=%D1%84%D0%B0%D0%BD%D1%82%D0%B0%D1%81%D1%82%D0%B8%D0%BA%D0%B0&lists=!top250`
  },
  // {
  //   header: 'Аниме',
  //   url: `movie?page=1&limit=15&typeNumber=1&lists=top-100-movies`
  // },
]