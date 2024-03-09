import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';
import { TmplAstForLoopBlockEmpty } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private localStorageService: LocalstorageService // Injetar o serviço
  ) { }

  isAuthenticated(): boolean {
    const token = this.localStorageService.getItem('token'); // Recupera o token do localStorage

    if (token)
      return true;
    return false;
  }
}
