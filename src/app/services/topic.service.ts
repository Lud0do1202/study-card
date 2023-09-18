import { HttpClient, HttpParams } from '@angular/common/http';
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

  /* -------------------------------- Get All ------------------------------- */
  getAll(): Observable<Topic[]> {
    return this.http.get<Topic[]>(environment.api.topic);
  }

  /* -------------------------------- Insert -------------------------------- */
  insert(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(environment.api.topic, { topic });
  }

  /* -------------------------------- Update -------------------------------- */
  update(topic: Topic): Observable<void> {
    return this.http.put<void>(environment.api.topic, { topic });
  }

  /* -------------------------------- Delete -------------------------------- */
  delete(topicID: number): Observable<void> {
    return this.http.delete<void>(environment.api.topic, { params: new HttpParams().set('topicID', topicID) });
  }
}
