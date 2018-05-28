import { Injectable } from '@angular/core';
import { Board } from './model';
import { BaseService } from '../core/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class BoardService extends BaseService {
  boardsUrl = '/board';

  constructor(private http: HttpClient,
    private baseService: BaseService) {
    super();
  }

  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.baseService.baseUrl + this.boardsUrl);
  }

  getBoardById(id): Observable<Board> {
    return this.http.get<Board>(this.baseService.baseUrl + this.boardsUrl + '/' + id);
  }

  addBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(this.baseService.baseUrl + this.boardsUrl, board, this.httpOptions).pipe(
      tap((boardAdd: Board) => console.log(`added board w/ id=${boardAdd.id}`))
    );
  }

  deleteBoard(id: number): Observable<Board> {
    console.log('deleting', id);
    return this.http.delete<Board>(this.baseService.baseUrl + this.boardsUrl + '/' + id, this.httpOptions).pipe(
      tap((board: Board) => console.log(`deleted board w/ id=${id}`))
    );
  }


}
