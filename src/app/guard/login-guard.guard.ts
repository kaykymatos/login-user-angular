import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
import { LocalstorageService } from '../services/localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class loginGuardGuard implements CanActivate {
  constructor(
    private usuarioService: AuthService,
    private router: Router,
  ) { }
  
  canActivate() {
 
    if (this.usuarioService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}