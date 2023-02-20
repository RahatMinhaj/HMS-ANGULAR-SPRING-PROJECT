import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionstorageService } from '../Service/sessionstorage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

 
  

  constructor(
    private localsessionStorage:SessionstorageService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  // Get the JWT token from local storage
  const token = this.localsessionStorage.getToken();
    if(token){
      // console.log("Token Exist : " , token)

      request = request.clone({
        setHeaders: {
          'Authorization': "Bearer " + this.localsessionStorage.getToken()
        }
      });
    }

     
    return next.handle(request);

}
}
