import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of, switchMap, catchError, throwError } from 'rxjs';
import { AuthResponse } from '../models/auth-response.model'; // Adjust the path as needed

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private baseUrl = 'http://localhost:5040/api'; // Adjust URL if necessary
    private refreshTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    constructor(private http: HttpClient) {
        this.loadTokens();
    }

    private storeTokens(accessToken: string, refreshToken: string): void {
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    }

    private removeTokens(): void {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

    private loadTokens(): void {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        this.refreshTokenSubject.next(refreshToken);
    }

    login(email: string, password: string): Observable<AuthResponse | null> {
        return this.http.post<AuthResponse>(`${this.baseUrl}/login`, { email, password }).pipe(
            switchMap((response) => {
                if (response && response.accessToken && response.refreshToken) {
                    this.storeTokens(response.accessToken, response.refreshToken);
                }
                return of(response);
            }),
            catchError((error) => {
                console.error('Login failed', error);
                return of(null);
            })
        );
    }

    refreshAccessToken(): Observable<any> {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            return of(null);
        }

        return this.http.post(`${this.baseUrl}/refresh-token`, { refreshToken }).pipe(
            switchMap((response: any) => {
                if (response && response.accessToken) {
                    this.storeTokens(response.accessToken, response.refreshToken);
                    return of(response);
                } else {
                    this.removeTokens();
                    return of(null);
                }
            }),
            catchError((error) => {
                console.error('Refresh token failed', error);
                this.removeTokens();
                return of(null);
            })
        );
    }

    logout(): void {
        this.removeTokens();
    }
}