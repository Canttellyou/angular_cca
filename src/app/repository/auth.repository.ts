import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment.development';
import AuthModel, { AuthModelFactory } from '../model/auth.model';

@Injectable({
    providedIn: 'root'
})
export class AuthRepository {
    constructor(private _httpClient: HttpClient) {}

    login = (payload: any): Observable<AuthModel> => {
        return this._httpClient.post(`${environment.baseUrl}/req_login`, payload).pipe(
            map((res: any) => AuthModelFactory.fromJson(res))
        )
    }

    signup = (payload: any): Observable<AuthModel> => {
        return this._httpClient.post(`${environment.baseUrl}/req_login`, payload).pipe(
            map((res: any) => AuthModelFactory.fromJson(res))
        )
    }
}
