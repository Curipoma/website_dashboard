import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoading = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.isLoading.asObservable();

  showLoading(): void {
    this.isLoading.next(true);
  }
  hiddenLoading(): void {
    this.isLoading.next(false);
  }
}
