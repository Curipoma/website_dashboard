import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="relative py-40 px-4 sm:px-12 md:px-12 lg:px-12">
      <div class="flex flex-col items-center gap-1 w-full z-10">
        <h4
          class="text-2xl font-semibold bg-gradient-to-r from-purple-900 to-pink-900 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent py-2">
          Designed and Developed Alvaro Curipoma
        </h4>
        <small class="py-1 text-gray-900 dark:text-gray-200">August - 2022</small>
        <hr class="w-full border-gray-300 mt-2"/>
      </div>
    </footer>
  `,
})
export class FooterComponent {
}
