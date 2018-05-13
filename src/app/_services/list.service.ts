import { Injectable } from '@angular/core';
import { List } from '../_models/list';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {
  notesUrl = "http://localhost:8080/api/notes";
  constructor(private http: HttpClient) {  }
  getLists():  Observable<List[]>  {
    return this.http.get<List[]>(this.notesUrl);
  }

  addList (list: List): Observable<List> {
  return this.http.post<List>(this.notesUrl, list, httpOptions).pipe(
    tap((list: List) => console.log(`added list w/ id=${list.id}`))
  );
  }

  deleteList (id: number): Observable<List> {
  console.log("deleting", id);
  return this.http.delete<List>(this.notesUrl + '/' + id, httpOptions).pipe(
    tap((list: List) => console.log(`deleted list w/ id=${id}`))
  );
}


}
