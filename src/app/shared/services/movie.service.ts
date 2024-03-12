import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";
import {IApiResponse} from "../models/api-response";
import {IFilm} from "../models/films/film";
import {PersonFullInfo} from "../models/person/person-full-info";
import {IAwardRequest} from "../models/person/award";
import {IShortFilmInfo} from "../models/films/short-film-info";

export const REQUIRED_FIELDS: string = 'notNullFields=poster.url&selectFields=poster&selectFields=id&selectFields=name&selectFields=year&selectFields=rating'

@Injectable({
  providedIn: 'root'
})
//TODO объединить методы с одинаковым адресом в один
export class MovieService {

  constructor(private _http: HttpClient) { }

  public openModal: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public getMovieByOptions(url: string, limit: number = 15, page: number = 1): Observable<IApiResponse> {
    return this._http.get<IApiResponse>(`${environment.apiUrl}movie?${REQUIRED_FIELDS}&page=${page}&limit=${limit}${url}`);
  }

  public getMovieById(id: number): Observable<IFilm> {
    return this._http.get<IFilm>(`${environment.apiUrl}movie/${id}`);
  }

  public getPersonById(id: number): Observable<PersonFullInfo> {
    return this._http.get<PersonFullInfo>(`${environment.apiUrl}person/${id}`);
  }

  public getPersonAwards(id: string): Observable<IAwardRequest> {
    return this._http.get<IAwardRequest>(`${environment.apiUrl}person/awards?page=1&limit=50&personId=${id}`);
  }

  public searchMoviesByName(query: string): Observable<IApiResponse> {
    return this._http.get<IApiResponse>(`${environment.apiUrl}movie/search?page=1&limit=6&query=${query}`);
  }

  public searchPersonByName(query: string): Observable<IApiResponse> {
    return this._http.get<IApiResponse>(`${environment.apiUrl}person/search?page=1&limit=6&query=${query}`);
  }

}

