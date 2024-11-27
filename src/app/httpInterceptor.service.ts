// http-interceptor.service.ts

import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Request made to:', req.url);

  // Clone and modify the request (e.g., add a custom header)
  const clonedRequest = req.clone({});
  return next(clonedRequest);
};
