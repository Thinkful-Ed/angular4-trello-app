import { Injectable } from '@angular/core';
import { List } from '../_models/model';
import { Board } from '../_models/model';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ListService {
  notesUrl = "/lists";
  constructor(private http: HttpClient, private baseService: BaseService) {  }

  getLists():  Observable<List[]>  {
    return this.http.get<List[]>(this.baseService.baseUrl + this.notesUrl);
  }

  getListById(id):  Observable<List>  {
    return this.http.get<List>(this.baseService.baseUrl + this.notesUrl + '/' + id);
  }

  addList (list: List, board: Board): Observable<List> {
  return this.http.post<List>(this.baseService.baseUrl + '/board/' + board.id + '/list', list, httpOptions).pipe(
    tap((list: List) => console.log(`added list w/ id=${list.id}`))
  );
  }

  deleteList (id: number): Observable<List> {
  console.log("deleting", id);
  return this.http.delete<List>(this.baseService.baseUrl + this.notesUrl + '/' + id, httpOptions).pipe(
    tap((list: List) => console.log(`deleted list w/ id=${id}`))
  );
}


}
