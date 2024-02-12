import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import dayjs from "dayjs"
import {environment} from "../../../environments/environment.development";
import {IApiResponse} from "../models/api-response";
import {IFilm} from "../models/films/film";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  public getLatestMovie(): Observable<IApiResponse> {
    const endDate: string = dayjs().format('DD.MM.YYYY');
    const startDate: string = dayjs().subtract(1, 'month').format('DD.MM.YYYY');

    return this._http.get<IApiResponse>(`${environment.apiUrl}movie?page=1&limit=10&premiere.world=${startDate}-${endDate}`);
  }

  public getMovieById(id: number): Observable<IFilm> {
    return this._http.get<IFilm>(`${environment.apiUrl}movie/${id}`);
  }
}

