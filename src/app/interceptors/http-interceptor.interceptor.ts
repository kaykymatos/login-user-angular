import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, shareReplay, throwError } from 'rxjs';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
   return next(req).pipe(
      shareReplay(),
      retry({ count: 5, delay: 1000 }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    );
};

