import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Privilege} from "../models/privilege";
import {Role, Roles} from "../models/role";
import {AuthorizeService} from "@bds/auth";
import {GridUploadOptions} from "../models/grid-upload-options";
import {Router} from "@angular/router";
import {filter, map, switchMap} from "rxjs/operators";
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private readonly _privileges$ = new BehaviorSubject<Privilege[] | null>(null);
  private readonly roleDefinition = {} as Roles;

  /**
   * @param authService AuthorizeService injected from @bds/auth
   * @param options Must be initialized externally and available in the providers list
   */
  constructor(
    private readonly authService: AuthorizeService,
    private readonly options: GridUploadOptions,
    private readonly router: Router,
  ) {
    this.roleDefinition = options.gridUploadRoles;
    this.decodeRole().subscribe((role) => {
      if (!Array.isArray(role)) {
        if (Object.prototype.hasOwnProperty.call(this.roleDefinition.roles, role)) {
          this._privileges$.next([...this.roleDefinition.roles[role]]);
        } else {
          this._privileges$.next([]);
        }
      } else {
        role.filter((r) => Object.keys(this.roleDefinition.roles).includes(r)).forEach(
          (r: string) => this._privileges$.next([...this.roleDefinition.roles[r]]),
        );
      }
    });
  }

  decodeRole(): Observable<Role> {
    return this.authService.isAuthenticated().pipe(
      filter((authed) => authed),
      switchMap(() => this.authService.getAccessToken()),
      filter((token) => !!token),
      map((token) => jwtDecode<{ role: Role }>(token).role),
      map((role) => (role ? role : Role.USER)),
    );
  }

  hasPrivilege(targetPrivilege: Privilege): Observable<boolean> {
    return this._privileges$.pipe(
      filter((p) => !!p),
      map(
        (privileges: Privilege[] | null) =>
          !!privileges && privileges.indexOf(targetPrivilege) >= 0,
      ),
    );
  }
}
