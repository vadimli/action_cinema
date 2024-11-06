import { FilmListRequest } from '../../components/main-page/main-page-list/main-page-list.component';

export function generateUrlForParams(request: FilmListRequest): string {
  const genre: string = request.genre ? `&genres.name=${request.genre}` : '';
  const rating: string = request.rating ? `&rating.kp=${request.rating}` : '';
  const years: string = request.years ? `&year=${request.years}` : '';
  const topKp: string = request.topKp ? `&top250=${request.topKp}` : '';
  return `&type=${request.type}${genre}${rating}${years}${topKp}`;
}
