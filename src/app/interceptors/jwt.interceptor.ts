import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private jwtServ: JwtHelperService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if user is logged in and request is to api url
    const token = localStorage.getItem('token');
    const validToken = this.jwtServ.decodeToken(token);
    const hasBaseUrl = request.url.startsWith(environment.baseUrl);
    if (validToken && hasBaseUrl) {
        request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${token}`,
              //Basic: 'mobile'
            }
        });
    }

    return next.handle(request);
  }
}
