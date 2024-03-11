import {SearchItem} from "../../shared/models/films/small-interfaces";
import {GENRES} from "../../components/main-page/main-page.config";
import {FilmListRequest} from "../../components/main-page/main-page-list/main-page-list.component";

export function  generateMovieListHeader(request: FilmListRequest): string {
  let typeList: string;
  const selectedGenre: SearchItem = GENRES.find(item => item.slug === request.genre)
  const genre: string = !!selectedGenre ? `: ${selectedGenre.name}` : '';
  switch(request.type) {
    case 'tv-series':
      typeList = 'Сериалы';
      break;
    case 'cartoon':
      typeList = 'Мультфильмы';
      break;
    default:
      typeList = 'Фильмы'
      break;
  }
  return  typeList + genre;

}
