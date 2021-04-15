import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAppError } from '../models';

@Injectable()
export class NetworkService {
    constructor(private http: HttpClient, private injector: Injector) {
    }

    public get(url: string): Observable<any> {
        return this.http.get(url)
            .pipe(catchError(this.handleError));
    }

    public post(url: string, data: unknown): Observable<any> {
        return this.http.post(url, data)
            .pipe(catchError(this.handleError));
    }

    public put(url: string, data: any): Observable<any> {
        return this.http.put(url, data)
            .pipe(catchError(this.handleError));
    }

    public delete(url: string): Observable<any> {
        return this.http.delete(url)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: IAppError): Observable<any> {
        return throwError(error);
    }
}
