import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const isLoggedIn = localStorage.getItem('token') === 'true';
  const protectedRoutes: string[] = ['/dashboard', '/create-job'];

  return protectedRoutes.includes(state.url) && !isLoggedIn
    ? router.navigate(['/login'])
    : true;
};
