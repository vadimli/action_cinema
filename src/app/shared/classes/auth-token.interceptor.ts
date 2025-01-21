import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const authTokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  if (req.url.includes(environment.apiBaseUrl)) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
  }

  return next(req);
};
