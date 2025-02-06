import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router: Router = inject(Router);
  return localStorage.getItem('authToken') !== null
    ? true
    : router.navigate(['/auth'], {
        queryParams: {
          form: 'login',
        },
      });
};
