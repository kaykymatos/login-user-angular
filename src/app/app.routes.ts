import { Routes } from '@angular/router';
import {  isLoggedUser } from './guard/login-guard.guard';
import { isNotLoggedUser } from './guard/logged-user.guard';

export const routes: Routes = [
    {
        path: '',
        title: "Home",
        loadComponent: () => import('./pages/home/home.component')
    },
    {
        path: 'login',
        title: "Login",
        canActivate:[isNotLoggedUser],
        loadComponent: () => import('./pages/login/login.component'),
    },
    {
        path: 'cadastration',
        title: "Cadastration",
        canActivate:[isNotLoggedUser],
        loadComponent: () => import('./pages/cadastration/cadastration.component')
    },
    {
        path: 'info',
        title: "Info user",
        canActivate:[isLoggedUser],
        loadComponent: () => import('./pages/info-user/info-user.component')
    },
    {
        path: '**',
        title: "404",
        loadComponent: () => import('./pages/not-found/not-found.component')
    }
];
