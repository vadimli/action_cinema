import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";
import {IApiResponse} from "../models/api-response";
import {IFilm} from "../models/films/film";
import {IPerson} from "../models/films/person";
import {PersonFullInfo} from "../models/person/person-full-info";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  public getMovieByOptions(url: string): Observable<IApiResponse> {
    return this._http.get<IApiResponse>(`${environment.apiUrl}${url}`);
  }

  public getMovieById(id: number): Observable<IFilm> {
    return this._http.get<IFilm>(`${environment.apiUrl}movie/${id}`);
  }

  public getPersonById(id: number): Observable<PersonFullInfo> {
    return this._http.get<PersonFullInfo>(`${environment.apiUrl}person/${id}`);
  }
}

