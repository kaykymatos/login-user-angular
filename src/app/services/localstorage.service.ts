import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setItem(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // Tratar o erro de gravação no localStorage
      console.error('Erro ao gravar no localStorage:', error);
    }
  }
  getItem(key: string): string | null {
    try {
      var info = localStorage.getItem(key);
      if (info)
        return info;
      return null;
    } catch (error) {

      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // Tratar o erro de remoção no localStorage
      console.error('Erro ao remover do localStorage:', error);
    }
  }

  /**
   * Limpa todo o localStorage.
   */
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      // Tratar o erro de limpeza do localStorage
      console.error('Erro ao limpar o localStorage:', error);
    }
  }
}
