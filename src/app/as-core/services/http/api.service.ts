import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../../../environments/environment";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<T>(path:string, params: any = new HttpParams(), responseType = 'json'):Observable<T> {
    const options = {
      observe: 'response' as const,
      params,
      responseType
    };
    return this.http.get<T>(`${environment.apiUrl}${path}`, options as any)
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any):Observable<any>{
    return throwError(error.error);
  }
}
