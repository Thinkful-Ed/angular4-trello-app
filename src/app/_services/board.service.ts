import { Injectable } from '@angular/core';
import { Board } from '../_models/model';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BoardService {
  boardsUrl = "/board";

  constructor(private http: HttpClient, private baseService: BaseService) {  }

  getBoards():  Observable<Board[]>  {
    return this.http.get<Board[]>(this.baseService.baseUrl + this.boardsUrl);
  }

  getBoardById(id):  Observable<Board>  {
    return this.http.get<Board>(this.baseService.baseUrl + this.boardsUrl + '/' + id);
  }

  addBoard (board: Board): Observable<Board> {
  return this.http.post<Board>(this.baseService.baseUrl + this.boardsUrl, board, httpOptions).pipe(
    tap((board: Board) => console.log(`added board w/ id=${board.id}`))
  );
  }

  deleteBoard (id: number): Observable<Board> {
  console.log("deleting", id);
  return this.http.delete<Board>(this.baseService.baseUrl + this.boardsUrl + '/' + id, httpOptions).pipe(
    tap((board: Board) => console.log(`deleted board w/ id=${id}`))
  );
}


}
