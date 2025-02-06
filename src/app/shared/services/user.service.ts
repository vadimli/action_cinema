import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IUser } from '../models/auth/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private readonly http: HttpClient) {}

  public fetchUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.apiBaseUrl}/users`, {});
  }
}
