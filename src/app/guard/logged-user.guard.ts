import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalstorageService } from '../services/localstorage.service';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
class loggedUserGuard {
  constructor(
    private usuarioService: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {

    if (!this.usuarioService.isAuthenticated()) {
      console.log("passou aqui")
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
export const isNotLoggedUser = () => {
  return inject(loggedUserGuard).canActivate();
}