import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class loginGuardGuard implements CanActivate {
  constructor(
    private usuarioService: AuthService,
    private router: Router) { }
  canActivate() {
    if (this.usuarioService.isAuthenticated()) {
      return true;
    } else {
      console.log("passou")
      this.router.navigate(['login']);
      return false;
    }
  }
}