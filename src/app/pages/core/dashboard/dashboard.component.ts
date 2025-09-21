import {Component} from '@angular/core';
import {routeConsts} from "@shared/const/routes/route-consts";
import {dashboardRouteConsts} from "@shared/const/routes/dashboard-route-consts";
import {ChildrenOutletContexts} from "@angular/router";
import {routeAnimationsOpacity} from "../../../animations/routeAnimationsOpacity";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [
        routeAnimationsOpacity,
    ],
    standalone: false
})

export class DashboardComponent {
  routeConsts = routeConsts;
  dashboardRouteConsts = dashboardRouteConsts;

  constructor(
    private contexts: ChildrenOutletContexts,
  ) {
  }

  isRender(): boolean {
    return this.contexts.getContext('primary')?.route?.component != null;
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
