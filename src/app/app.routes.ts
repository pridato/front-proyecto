import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'Cliente',
    loadChildren: () => import('./pages/Cliente/cliente.routes').then(m => m.CLIENTE_ROUTES)
  },
  // redirigir directamente a registro
  {
    path: '',
    redirectTo: '/Cliente/Registro',
    pathMatch: 'full'
  },
];
