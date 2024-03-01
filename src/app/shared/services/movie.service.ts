import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";
import {IApiResponse} from "../models/api-response";
import {IFilm} from "../models/films/film";
import {PersonFullInfo} from "../models/person/person-full-info";
import {IImage} from "../models/image/image";
import {IAwardRequest} from "../models/person/award";

@Injectable({
  providedIn: 'root'
})
//TODO объединить методы с одинаковым адресом в один
export class MovieService {

  constructor(private _http: HttpClient) { }

  public getMovieByOptions(url: string, limit: number = 15, page: number = 1): Observable<IApiResponse> {
    return this._http.get<IApiResponse>(`${environment.apiUrl}movie?page=${page}&limit=${limit}&${url}`);
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

  public getImageById(id: number): Observable<IImage[]> {
    return this._http.get<IImage[]>(`${environment.apiUrl}image?page=1&limit=10&notNullFields=previewUrl&movieId=${id}&type=cover`);
  }
}

