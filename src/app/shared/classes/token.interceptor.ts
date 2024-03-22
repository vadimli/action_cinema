import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {X_API_KEY} from "../../constants/keys";

@Injectable()
export class TokenInterceptors implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          'X-API-KEY': X_API_KEY}
      })
    return next.handle(req)
  }
}
