import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  /* ------------------------------ Constructor ----------------------------- */
  constructor(private http: HttpClient) {}

  /* -------------------------------- Update -------------------------------- */
  update(topic: Topic): Observable<void> {
    return this.http.put<void>(environment.api.topic, { topic });
  }
}
