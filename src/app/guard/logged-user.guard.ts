import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LocalstorageService } from '../services/localstorage.service';

export class loggedUserGuard implements CanActivate {
  constructor(
    private usuarioService: AuthService,
    private router: Router
  ) { }
  
  canActivate() {
    if (!this.usuarioService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['**']);
      return false;
    }
  }
}