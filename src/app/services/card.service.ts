import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  /* ------------------------------ Constructor ----------------------------- */
  constructor(private http: HttpClient) {}

  /* -------------------------------- Get All ------------------------------- */
  getAll(topicID: number): Observable<Card[]> {
    return this.http.get<Card[]>(environment.api.card, { params: new HttpParams().set('topicID', topicID) });
  }

  /* -------------------------------- Insert -------------------------------- */
  insert(card: Card): Observable<Card> {
    return this.http.post<Card>(environment.api.card, { card });
  }

  /* -------------------------------- Update -------------------------------- */
  update(card: Card): Observable<void> {
    return this.http.put<void>(environment.api.card, { card });
  }

  /* -------------------------------- Delete -------------------------------- */
  delete(cardID: number): Observable<void> {
    return this.http.delete<void>(environment.api.card, { params: new HttpParams().set('cardID', cardID) });
  }
}
