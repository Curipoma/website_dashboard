import {Component} from '@angular/core';
import {RoutesEnum} from "@shared/enums";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    standalone: false
})
export class NotFoundComponent {
  routesEnum = RoutesEnum;
}
