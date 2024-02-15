import {IRating} from "./rating";
import {IFilmPicture} from "./film-picture";


/*Короткая информация о фильме, необходимая для отрисовки превью */
export interface IShortFilmInfo {
  id: number;
  rating: IRating;
  year?: number;
  name?: string;
  enName?: string;
  alternativeName?: string;
  type?: string;
  poster?: IFilmPicture;
  general?: boolean;
  description?: string;
  enProfession?: string;
}
