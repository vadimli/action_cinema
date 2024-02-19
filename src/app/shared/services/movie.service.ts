import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";
import {IApiResponse} from "../models/api-response";
import {IFilm} from "../models/films/film";
import {PersonFullInfo} from "../models/person/person-full-info";
import {IImage} from "../models/image/image";

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

  public getImageById(id: number): Observable<IImage[]> {
    return this._http.get<IImage[]>(`${environment.apiUrl}image?page=1&limit=10&notNullFields=previewUrl&movieId=${id}&type=cover`);
  }
}

