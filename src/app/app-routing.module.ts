import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { BlankComponent } from './layout/blank/blank.component';
import { routeConsts } from "@shared/const/routes/route-consts";
import { commonRouteConsts } from "@shared/const/routes/common-route-consts";

const routes: Routes = [
  {
    path: routeConsts.pathEmpty,
    component: MainComponent,
    children: [
      {
        path: routeConsts.pathEmpty,
        redirectTo: routeConsts.pathCore,
        pathMatch: 'full',
      },
      {
        path: routeConsts.pathCore,
        loadChildren: () => import('./pages/core/core.module').then(
            (m) => m.CoreModule
          ),
      },
    ],
  },
  {
    path: routeConsts.pathCommon,
    component: BlankComponent,
    loadChildren: () =>
      import('./pages/common/common.module').then(
        (m) => m.CommonModule
      ),
  },
  {
    path: routeConsts.full,
    redirectTo: commonRouteConsts.notFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
