import { Direction, Directionality } from '@angular/cdk/bidi';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class directionService implements OnDestroy {
  public constructor(public readonly dir: Directionality) {
    this.dir.change
      .pipe(
        takeUntil(this._destroyAll$),
        tap((direction: Direction) => this._changeDirection.next(direction))
      )
      .subscribe();
  }
  private readonly _destroyAll$ = new Subject<boolean>();

  private readonly _changeDirection = new BehaviorSubject<Direction>('rtl');

  public direction$: Observable<Direction> =
    this._changeDirection.asObservable();

  public get direction() {
    return this._changeDirection.value;
  }
  public setDirection(dir: Direction, onInit = true): void {
    if (onInit) {
      this.dir.change.emit(dir);
    } else {
      setTimeout(() => {
        this.dir.change.emit(dir);
      }, 1000);
    }
  }

  public ngOnDestroy(): void {
    this._destroyAll$.next(true);
    this._destroyAll$.complete();
  }
}
