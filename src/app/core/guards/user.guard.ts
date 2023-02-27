import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthServiceService } from '../../services/auth-service.service';
import { IUserVm, UserRole } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserGuardGuard implements CanActivate {
  public constructor(
    private readonly router: Router,
    private readonly _authServiceService: AuthServiceService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._authServiceService.user$.pipe(
      map((user: IUserVm | null) => {
        const isUser: boolean = !!user && user?.role === UserRole.USER;

        !isUser && this.router.navigateByUrl('/forbidden');

        return isUser;
      })
    );
  }
}
