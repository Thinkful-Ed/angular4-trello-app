import { Injectable } from '@angular/core';
import { Card } from '../_models/model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CardService {
  cardsUrl = "http://localhost:8080/api/cards";
  constructor(private http: HttpClient) {  }
  getCards():  Observable<Card[]>  {
    return this.http.get<Card[]>(this.cardsUrl);
  }

  addCard (card: Card): Observable<Card> {
  return this.http.post<Card>(this.cardsUrl, card, httpOptions).pipe(
    tap((card: Card) => console.log(`added card w/ id=${card.id}`))
  );
  }

  deleteCard (id: number): Observable<Card> {
  console.log("deleting", id);
  return this.http.delete<Card>(this.cardsUrl + '/' + id, httpOptions).pipe(
    tap((card: Card) => console.log(`deleted card w/ id=${id}`))
  );
}


}
