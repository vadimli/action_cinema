import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {apiKey} from "../../constants/keys";

@Injectable()
export class TokenInterceptors implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          'X-API-KEY': apiKey}
      })
    return next.handle(req)
  }
}
