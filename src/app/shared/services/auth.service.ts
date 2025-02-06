import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/auth/auth-response';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  public login(email: string, password: string): Observable<AuthResponse> {
    return this._http
      .post<AuthResponse>(
        `${environment.apiBaseUrl}/login`,
        { email, password },
        { withCredentials: true },
      )
      .pipe(
        tap((authResponse: AuthResponse) => {
          localStorage.setItem('authToken', authResponse.accessToken);
        }),
      );
  }

  public registration(email: string, password: string): Observable<AuthResponse> {
    return this._http
      .post<AuthResponse>(
        `${environment.apiBaseUrl}/registration`,
        {
          email,
          password,
        },
        { withCredentials: true },
      )
      .pipe(
        tap((authResponse: AuthResponse) => {
          localStorage.setItem('authToken', authResponse.accessToken);
        }),
      );
  }

  public logout(): Observable<void> {
    return this._http
      .post<void>(`${environment.apiBaseUrl}/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => {
          localStorage.removeItem('authToken');
        }),
      );
  }
}
