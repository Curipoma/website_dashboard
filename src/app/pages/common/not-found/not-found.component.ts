import { Component } from '@angular/core';
import { RoutesEnum } from '@shared/routes/dom/enums/routes.enum';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="flex flex-col justify-center items-center w-full h-full">
      <p class="p-2 text-center text-gray-700 dark:text-gray-200">
        {{ 'not-found.message' | translate }}
      </p>
      <h3 class="text-6xl font-bold text-gray-900 dark:text-gray-100 my-4">404</h3>
      <a
        [routerLink]="'/' + routesEnum.START"
        class="bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        {{ 'actions.start' | translate }}
      </a>
    </div>
  `,
  standalone: true,
  imports: [RouterLink, TranslateModule],
})
export class NotFoundComponent {
  routesEnum = RoutesEnum;
}
