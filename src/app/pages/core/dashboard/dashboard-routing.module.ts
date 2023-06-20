import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ProjectsComponent} from "./projects/projects.component";
import {dashboardRouteConsts} from "@shared/const/routes/dashboard-route-consts";
import {routeConsts} from "@shared/const/routes/route-consts";
import {DashboardComponent} from "./dashboard.component";

const routes: Routes = [
  {
    path: routeConsts.pathEmpty,
    data: {animation: 'CoreComponent'},
    component: DashboardComponent,
    children: [
      {
        path: routeConsts.pathEmpty,
        redirectTo: dashboardRouteConsts.aboutMe,
        pathMatch: 'full',
      },
      {
        path: dashboardRouteConsts.aboutMe,
        data: {animation: 'AboutMeComponent'},
        component: AboutMeComponent,
      },
      {
        path: dashboardRouteConsts.projects,
        data: {animation: 'ProjectsComponent'},
        component: ProjectsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
