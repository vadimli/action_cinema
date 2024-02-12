import {IRating} from "./rating";
import {IFilmPicture} from "./film-picture";


/*Короткая информация о фильме, необходимая для отрисовки превью */
export interface IShortFilmInfo {
  id?: number | null;
  rating: IRating;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string;
  poster: IFilmPicture;
}
