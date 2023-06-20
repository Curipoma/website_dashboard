import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routeConsts} from "@shared/const/routes/route-consts";
import {coreRouteConsts} from "@shared/const/routes/core-route-consts";

const routes: Routes = [
  {
    path: routeConsts.pathEmpty,
    redirectTo: coreRouteConsts.dashboard,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
