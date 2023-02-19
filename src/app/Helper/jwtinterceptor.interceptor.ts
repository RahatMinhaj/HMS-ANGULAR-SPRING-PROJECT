import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SessionstorageService } from '../Service/sessionstorage.service';
import { BussServiceService } from '../Service/buss-service.service';
import { EventData } from '../Service/event.class';





@Injectable()
export class JwtinterceptorInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(
    private localStorage: SessionstorageService,
    private eventBusService: BussServiceService
  ) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.localStorage.isLoggedIn()) {
      console.log("Token--",this.localStorage.getToken())
      const request = req.clone({
        headers: new HttpHeaders({
          'Authorization': "Bearer " + this.localStorage.getToken()
        })
      });
      return next.handle(request).pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse && err.status === 401) {
            this.localStorage.clean();
            window.location.reload();
          }
          return throwError(err);
        })
      );
    }

    return next.handle(req);

  }


  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      if (this.localStorage.isLoggedIn()) {
        this.eventBusService.emit(new EventData('logout', null));
      }
    }

    return next.handle(request);
  }

}


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JwtinterceptorInterceptor, multi: true },
];

