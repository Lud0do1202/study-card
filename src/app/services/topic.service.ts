import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  /* ------------------------------ Constructor ----------------------------- */
  constructor(private http: HttpClient, private $user$: UserService) {}

  /* -------------------------------- Get All ------------------------------- */
  getAll(): Observable<Topic[]> {
    return this.http.get<Topic[]>(environment.api.topic);
  }

  /* -------------------------------- Insert -------------------------------- */
  insert(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(environment.api.topic, { topic });
  }

  /* -------------------------------- Update -------------------------------- */
  update(topic: Topic): Observable<Topic> {
    return this.http.put<Topic>(environment.api.topic, { topic });
  }

  /* -------------------------------- Delete -------------------------------- */
  delete(topic: Topic): Observable<Topic> {
    return this.http.delete<Topic>(environment.api.topic, { body: { topic } });
  }
}
