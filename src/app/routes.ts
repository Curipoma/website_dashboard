import { Routes } from '@angular/router';
import { routeConsts } from '@shared/routes/dom/routes/route-consts';

export const routes: Routes = [
  {
    path: '',
    data: {
      animation: 'main',
    },
    loadComponent: () =>
      import('@shared/layout/main/main.component').then((m) => m.MainComponent),
    children: [
      {
        path: '',
        data: {
          animation: 'core',
        },
        loadComponent: () => import('./pages/about-me/about-me.component').then((c) => c.AboutMeComponent),
      },
    ],
  },
  {
    path: routeConsts.pathCommon,
    data: {
      animation: 'common',
    },
    loadComponent: () =>
      import('@shared/layout/blank/blank.component').then(
        (m) => m.BlankComponent
      ),
    loadChildren: () => import('./pages/common/routes').then((m) => m.routes),
  },
  {
    path: routeConsts.fullMatch,
    redirectTo: routeConsts.pathCommon,
    pathMatch: 'full',
  },
];
