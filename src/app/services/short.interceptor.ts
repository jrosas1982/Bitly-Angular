import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const TOKEN = "6dca64f824f2ab77b50852fbd776c7390474c708";
    request = request.clone({ setHeaders: { Authorization: 'Bearer ' + TOKEN } });
    return next.handle(request);
  }
}
