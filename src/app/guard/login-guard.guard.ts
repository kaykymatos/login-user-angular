import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable, inject } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
@Injectable({
  providedIn: 'root'
})
class loginGuardGuard {
  constructor(
    private usuarioService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {

    if (this.usuarioService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
export const isLoggedUser = () => {
    return inject(loginGuardGuard).canActivate();
  }