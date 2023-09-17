import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Topic } from '../interfaces/topic';
import { UserService } from './user.service';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  /* ------------------------------ Constructor ----------------------------- */
  constructor(private http: HttpClient, private $user$: UserService) {}

  /* -------------------------------- Get All ------------------------------- */
  getAll(id_topic: number | string): Observable<Card[]> {
    const headers = new HttpHeaders().set('X-User-ID', this.$user$.getUserID()!).set('X-Topic-ID', id_topic.toString());

    return this.http.get<Card[]>(environment.api.card, { headers });
  }
}
