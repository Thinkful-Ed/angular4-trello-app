import { Injectable } from '@angular/core';
import { Board, List } from '../_models/model';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BoardService {
  constructor(private http: HttpClient, private baseService: BaseService) {  }
  boardsUrl = this.baseService.baseUrl + '/board';

  getBoards():  Observable<Board[]>  {
    return this.http.get<Board[]>(this.boardsUrl);
  }

  getBoardById(id):  Observable<Board>  {
    return this.http.get<Board>(this.boardsUrl + '/' + id);
  }

  addBoard (board: Board): Observable<Board> {
  return this.http.post<Board>(this.boardsUrl, board, httpOptions).pipe(
    tap((board: Board) => console.log(`added board w/ id=${board.id}`))
  );
  }

  addList (boardId, list: List): Observable<List> {
    return this.http.post<List>(this.boardsUrl + '/' + boardId + '/list', list, httpOptions).pipe(
      tap((list: List) => console.log(`added board w/ id=${list.id}`))
    );
  }

  deleteBoard (id: number): Observable<Board> {
  console.log('deleting', id);
  return this.http.delete<Board>(this.boardsUrl + '/' + id, httpOptions).pipe(
    tap((board: Board) => console.log(`deleted board w/ id=${id}`))
  );
}


}
