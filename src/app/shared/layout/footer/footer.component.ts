import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer
      class="mx-12 relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-950 dark:to-gray-900/30 border-t border-gray-200 dark:border-gray-700 py-12 px-4 sm:px-12 md:px-20">

      <div class="max-w-7xl mx-auto flex flex-col items-center gap-6">

        <!-- Texto principal -->
        <h4
          class="text-xl md:text-2xl font-semibold text-center bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
          Designed & Developed by <span class="font-bold">Alvaro Curipoma</span>
        </h4>

        <!-- Redes sociales -->
        <div class="flex gap-6">
          <a href="https://github.com/tuusuario" target="_blank"
             class="text-gray-600 hover:text-purple-700 dark:text-gray-300 dark:hover:text-purple-400 transition-colors duration-300">
            <i class="lab la-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/tuusuario" target="_blank"
             class="text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-300">
            <i class="lab la-linkedin text-2xl"></i>
          </a>
          <a href="mailto:tuemail@gmail.com"
             class="text-gray-600 hover:text-pink-700 dark:text-gray-300 dark:hover:text-pink-400 transition-colors duration-300">
            <i class="las la-envelope text-2xl"></i>
          </a>
        </div>

        <!-- Línea divisoria -->
        <hr class="w-full border-gray-300 dark:border-gray-700"/>

        <!-- Copyright -->
        <small class="text-gray-600 dark:text-gray-400 text-sm">
          © {{ currentYear }} | August 2022 – Present
        </small>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
}
