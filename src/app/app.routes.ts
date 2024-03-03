import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: "Home",
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'login',
        title: "Login",
        loadComponent: () => import('./pages/login/login.component')
    },
    {
        path: 'cadastration',
        title: "Cadastration",
        loadComponent: () => import('./pages/cadastration/cadastration.component')
    },
    {
        path: '**',
        title: "404",
        loadComponent: () => import('./pages/not-found/not-found.component')
    }
];
