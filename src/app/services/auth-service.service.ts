import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { IUserVm, UserRole } from '../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  public constructor(
    private readonly router: Router,
    private readonly _storage: LocalStorageService,
    private readonly _translate: TranslateService
  ) {
    this._getUser();
  }

  private _user: BehaviorSubject<IUserVm | null> =
    new BehaviorSubject<IUserVm | null>(null);

  public user$: Observable<IUserVm | null> = this._user.asObservable();

  /** Returns authentication status stream */
  public get isAuthenticated$(): Observable<boolean> {
    return this.user$.pipe(map((user) => !!user));
  }

  /** Returns current authentication status */
  public get isAuthenticated(): boolean {
    return !!this._user.value;
  }

  public login = (
    payload: IUserVm
  ): Observable<{ status: number; role: UserRole; message: string }> => {
    return of([]).pipe(
      map(() => {
        const acceptedUser: IUserVm[] = [
          { userName: 'user', password: 'user', role: UserRole.USER },
          { userName: 'admin', password: 'admin', role: UserRole.ADMIN },
        ];

        const enteredUserIndex: number = acceptedUser.findIndex(
          (user: IUserVm) => user?.userName === payload?.userName
        );

        if (
          enteredUserIndex >= 0 &&
          acceptedUser[enteredUserIndex]?.password === payload?.password
        ) {
          this._storage.set('current_user', {
            userName: payload?.userName,
            role: acceptedUser[enteredUserIndex]?.role,
          });

          return {
            status: 200,
            role: acceptedUser[enteredUserIndex]?.role,
            message: this._translate.instant('loginSuccess'),
          };
        } else
          return {
            status: 403,
            role: '' as UserRole,
            message: this._translate.instant('loginFailed'),
          };
      }),
      tap(() => this._getUser())
    );
  };

  public signOut = (): void => {
    this._storage.remove('current_user');
    this._getUser();
    this.router.navigateByUrl('/');
  };

  private _getUser = (): void => {
    this._user.next(this._storage.get('current_user') as any);
  };
}
