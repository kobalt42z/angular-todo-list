import { CanActivateFn } from '@angular/router';

export const fbAuthGuard: CanActivateFn = (route, state) => {
  
  return true;
};
