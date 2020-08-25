import { Sistema } from './sistema';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  private baseUrlGet = 'http://localhost:8080/manter_sistema/api/v1/sistemas';

  private baseUrl = 'http://localhost:8080/manter_sistema/api/v1/sistema';

  private teste = 'http://localhost:8080/api/v1/teste';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  getSistema(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSistema(sistema: Object): Observable<Object> {
    debugger
    return this.http.post(`${this.baseUrl}`, sistema);
  }

  updateSistema(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSistema(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSistemaList(): Observable<any> {
    return this.http.get(`${this.baseUrlGet}`);
  }

  getSistemaTeste(): Observable<any> {
    return this.http.get(`${this.teste}`);
  }

  read(): Observable<Sistema[]> {
    debugger
    return this.http.get<Sistema[]>(this.baseUrlGet).pipe(
      map( objeto => objeto),
      catchError(e => this.errorHandler(e)),
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage('Ocorreu um erro!', true);
    return EMPTY;
  }

}
