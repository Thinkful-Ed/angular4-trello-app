import { Injectable } from '@angular/core';
import { Card, List } from '../core/model';
import { BaseService } from '../core/base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CardService {
  cardsUrl = '/card';
  constructor(private http: HttpClient,
    private baseService: BaseService) {
  }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseService.baseUrl + this.cardsUrl);
  }

  addCard(card: Card, list: List): Observable<Card> {
    const url = this.baseService.baseUrl + '/list/' + list.id + this.cardsUrl;
    return this.http.post<Card>(url, card, this.baseService.httpOptions)
      .pipe(
        tap((cardAdded: Card) => console.log(`added card w/ id=${cardAdded.id}`))
      );
  }

  deleteCard(id: number): Observable<Card> {
    const url = this.baseService.baseUrl + this.cardsUrl + '/' + id;
    console.log('deleting', id);
    return this.http.delete<Card>(url, this.baseService.httpOptions)
      .pipe(
        tap((cardDel: Card) => console.log(`deleted cardDel w/ id=${cardDel.id}`))
      );
  }

}
