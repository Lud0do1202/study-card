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
  /* ------------------------------ Constructor ----------------------------- */
  constructor(private http: HttpClient, private $user$: UserService) {}

  /* -------------------------------- Get All ------------------------------- */
  getAll(): Observable<Topic[]> {
    const headers = new HttpHeaders().set('X-User-ID', this.$user$.getUserID()!);

    return this.http.get<Topic[]>(environment.api.topic, { headers });
  }

  /* -------------------------------- Update -------------------------------- */
  update(topic: Topic): Observable<void> {
    const headers = new HttpHeaders().set('X-User-ID', this.$user$.getUserID()!);

    return this.http.put<void>(environment.api.topic, { topic }, { headers });
  }
} 
