import {FilmListRequest} from "../../components/main-page/main-page-list/main-page-list.component";

export function generateUrlForParams(request: FilmListRequest): string {
  const genre: string = !!request.genre ? `&genres.name=${request.genre}` : '';
  return `&type=${request.type}${genre}`;
}
