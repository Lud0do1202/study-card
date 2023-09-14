import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  /* --------------------------------- Data --------------------------------- */
  data: any;

  /* ------------------------------ Constructor ----------------------------- */
  constructor(private router: Router) {}

  /* ------------------------------- Navigate ------------------------------- */
  navigate(endpoint: string, data?: any): void {
    this.data = data;
    this.router.navigateByUrl(endpoint);
  }

  /* --------------------------------- Error -------------------------------- */
  error(): void {
    this.router.navigateByUrl('/error');
  }
}
