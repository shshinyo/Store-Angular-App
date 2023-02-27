import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private readonly _toastrService: ToastrService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(
          "🚀 ~ file: error-interceptor.service.ts ~ line 24 ~ ErrorInterceptorService ~ catchError ~ err",
          err
        );
        this._toastrService.error(err?.message);
        return throwError(() => new Error(err?.error));
      })
    );
  }
}
