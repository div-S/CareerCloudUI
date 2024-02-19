import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

// export class authGuard implements CanActivate {
//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): boolean {
//     if (this.authService.isLoggedIn()) {
//       return true;
//     } else {
//       this.router.navigate(['/jobs']);
//       return false;
//     }
//   }
// }

export const authGuard: CanActivateFn = (route, state) => {
  if (AuthService.isLoggedIn()) {
    return true;
  } else {
    return false;
  }
};
