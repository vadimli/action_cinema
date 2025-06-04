import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IUser } from '../models/auth/user';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  /*Создаем BehaviorSubject с начальным значением null*/
  public user$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  constructor(private readonly http: HttpClient) {}

  /*Получить инфо о пользователе*/
  public getUserInfo(): Observable<IUser> {
    return this.http.get<IUser>(`${environment.apiBaseUrl}/getUserInfo`, {
      withCredentials: true,
    });
  }

  /*Изменить поле с избранными фильмами*/
  public changeFavorites(filmId: number, remove: boolean = false): Observable<IUser> {
    return this.http.post<IUser>(
      `${environment.apiBaseUrl}/changeFavorites`,
      { filmId, remove },
      { withCredentials: true },
    );
  }

  /*Метод для обновления состояния*/
  public setUser(user: IUser) {
    this.user$.next(user);
  }

  /*Метод для получения текущего значения*/
  public getCurrentUser(): IUser {
    return this.user$.value;
  }
}
