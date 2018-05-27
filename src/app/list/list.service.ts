import { Injectable } from '@angular/core';
import { List, Board } from '../core/model';
import { BaseService } from '../core/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ListService extends BaseService {
  notesUrl = '/lists';
  constructor(private http: HttpClient, private baseService: BaseService) {
    super();
  }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.baseService.baseUrl + this.notesUrl);
  }

  getListById(id): Observable<List> {
    return this.http.get<List>(this.baseService.baseUrl + this.notesUrl + '/' + id);
  }

  addList(list: List, board: Board): Observable<List> {
    const url = this.baseService.baseUrl + '/board/' + board.id + '/list';
    return this.http.post<List>(url, list, this.httpOptions)
      .pipe(
        tap((listAdded: List) => console.log(`added list w/ id=${listAdded.id}`))
      );
  }

  deleteList(id: number): Observable<List> {
    const url = this.baseService.baseUrl + this.notesUrl + '/' + id;
    console.log('deleting', id);
    return this.http.delete<List>(url, this.httpOptions)
      .pipe(
        tap((list: List) => console.log(`deleted list w/ id=${id}`))
      );
  }

}
