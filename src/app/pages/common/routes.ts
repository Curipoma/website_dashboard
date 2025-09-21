import { Routes } from '@angular/router';
import { routeConsts } from '@shared/routes/dom/routes/route-consts';
import { commonRouteConsts } from '@shared/routes/dom/routes/common-route-consts';

export const routes: Routes = [
  {
    path: commonRouteConsts.notFound,
    data: {
      title: 'No encontrado',
      animation: 'NotFoundComponent',
    },
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    path: routeConsts.fullMatch,
    redirectTo: commonRouteConsts.notFound,
    pathMatch: 'full',
  },
];
