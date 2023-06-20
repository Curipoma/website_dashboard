import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {LoadingInitComponent} from "./layout/loading-init/loading-init.component";
import {ChildrenOutletContexts} from "@angular/router";
import {routeAnimationsOpacity} from "./animations/routeAnimationsOpacity";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimationsOpacity,
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private contexts: ChildrenOutletContexts,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngOnInit(): void {
    this.loadingInit(LoadingInitComponent);
    this.getRouteAnimationData();
  }

  loadingInit(component: any) {
    this.viewContainerRef.createComponent(component);
    setTimeout(() => this.viewContainerRef.clear(), 2000);
  }

  isRender(): boolean {
    return this.contexts.getContext('primary')?.route?.component != null;
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
