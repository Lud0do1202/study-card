import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  getAll(id_topic: number): Observable<Card[]> {
    const headers = new HttpHeaders().set('X-Topic-ID', id_topic.toString());

    return this.http.get<Card[]>(environment.api.card, { headers });
  }

  /* -------------------------------- Insert -------------------------------- */
  insert(card: Card): Observable<Card> {
    const headers = new HttpHeaders().set('X-Topic-ID', card.id_topic.toString());

    return this.http.post<Card>(environment.api.card, { card }, { headers });
  }
}
