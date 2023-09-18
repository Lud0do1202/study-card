import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable()
export class UserIdInterceptor implements HttpInterceptor {
  constructor(private $user$: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(
      request.clone({
        setHeaders: {
          'X-User-ID': this.$user$.getUserID()!,
        },
      })
    );
  }
}
