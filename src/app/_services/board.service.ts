import { Injectable } from '@angular/core';
import { Board } from '../_models/board';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BoardService {
  boardsUrl = "http://localhost:8080/api/boards";
  constructor(private http: HttpClient) {  }
  getBoards():  Observable<Board[]>  {
    return this.http.get<Board[]>(this.boardsUrl);
  }
  
  addBoard (board: Board): Observable<Board> {
  return this.http.post<Board>(this.boardsUrl, board, httpOptions).pipe(
    tap((board: Board) => console.log(`added board w/ id=${board.id}`))
  );
  }

  deleteBoard (id: number): Observable<Board> {
  console.log("deleting", id);
  return this.http.delete<Board>(this.boardsUrl + '/' + id, httpOptions).pipe(
    tap((board: Board) => console.log(`deleted board w/ id=${id}`))
  );
}


}
