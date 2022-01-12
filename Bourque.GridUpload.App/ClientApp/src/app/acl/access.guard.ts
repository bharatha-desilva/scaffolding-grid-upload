import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AccessService} from "./access.service";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate, CanActivateChild {

  constructor(private readonly accessService: AccessService, private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    /*return this.accessService.hasPrivilege(route.data.targetPrivilege).pipe(
      tap((hasAccess) => {
        if (!hasAccess) {
          void this.router.navigate(['/error', '403']);
        }
      }),
    );*///TODO
    return of(true);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(childRoute, state);
  }
}
