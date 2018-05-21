import { Injectable } from '@angular/core';
import { Card } from '../_models/model';
import { List } from '../_models/model';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CardService {
  cardsUrl = "/card";
  constructor(private http: HttpClient, private baseService: BaseService) {  }

  getCards():  Observable<Card[]>  {
    return this.http.get<Card[]>(this.baseService.baseUrl + this.cardsUrl);
  }

  addCard (card: Card, list: List): Observable<Card> {
  return this.http.post<Card>(this.baseService.baseUrl + '/list/' + list.id + this.cardsUrl, card, httpOptions).pipe(
    tap((card: Card) => console.log(`added card w/ id=${card.id}`))
  );
  }

  deleteCard (id: number): Observable<Card> {
  console.log("deleting", id);
  return this.http.delete<Card>(this.baseService.baseUrl + this.cardsUrl + '/' + id, httpOptions).pipe(
    tap((card: Card) => console.log(`deleted card w/ id=${id}`))
  );
}


}
