import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'
export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log("REQUEST CAPTURED");
        // console.log(req.url);
        const modifiedRequest = req.clone({headers:req.headers.append('Auth','xyz')})
        return next.handle(modifiedRequest);
    }


}

