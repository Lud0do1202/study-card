import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '../interfaces/topic';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class TopicService {
  defaultTopic: Topic = {
    id: '',
    topic: 'New Topic',
    theme: 'pink-theme',
  };

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private http: HttpClient, private $user$: UserService) {}

  /* -------------------------------- Get All ------------------------------- */
  getAll(): Observable<Topic[]> {
    const headers = new HttpHeaders().set('X-User-ID', this.$user$.getUserID()!);

    return this.http.get<Topic[]>(environment.api.topic, { headers });
  }

  /* -------------------------------- Insert -------------------------------- */
  insert(topic?: Topic): Observable<Topic> {
    const headers = new HttpHeaders().set('X-User-ID', this.$user$.getUserID()!);

    topic = topic ?? this.defaultTopic;

    return this.http.post<Topic>(environment.api.topic, { topic }, { headers });
  }

  /* -------------------------------- Update -------------------------------- */
  update(topic: Topic): Observable<Topic> {
    const headers = new HttpHeaders().set('X-User-ID', this.$user$.getUserID()!);

    return this.http.put<Topic>(environment.api.topic, { topic }, { headers });
  }
}
