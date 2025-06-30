import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./auth/register/register').then((m) => m.RegisterComponent),
  },
  {
    path: 'payments',
    loadComponent: () =>
      import('./payments/payments').then((m) => m.PaymentsComponent),
    canActivate: [() =>
      import('./auth/guards/auth.guard').then(m => m.AuthGuard)
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
