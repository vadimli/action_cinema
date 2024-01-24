import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import dayjs from "dayjs"
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _http: HttpClient) { }

  public getLatestMovie(): Observable<any> {
    const endDate: string = dayjs().format('DD.MM.YYYY');
    const startDate: string = dayjs().subtract(1, 'month').format('DD.MM.YYYY');
    console.log(`${environment.apiUrl}movie?page=1&limit=10&premiere.world=${startDate}-${endDate}`)

    return this._http.get(`${environment.apiUrl}movie?page=1&limit=10&premiere.world=${startDate}-${endDate}`)
  }
}

