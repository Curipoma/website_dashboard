import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from "@services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loadingService.showLoading();
    return next.handle(req).pipe((req) => {
      this.loadingService.hiddenLoading();
      return req;
    });
  }
}
