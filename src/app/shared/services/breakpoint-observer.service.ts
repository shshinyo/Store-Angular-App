import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { distinctUntilChanged, tap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BreakpointObserverService {
  public constructor(private readonly breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([
        Breakpoints.XLarge,
        Breakpoints.Large,
        Breakpoints.Medium,
        Breakpoints.Small,
        Breakpoints.XSmall,
        "(min-width: 500px)",
      ])
      .pipe(
        tap((value) => this._breakpointChanged()),
        distinctUntilChanged()
      )
      .subscribe();
  }

  private readonly _currentBreakpoint: BehaviorSubject<string> =
    new BehaviorSubject<string>(Breakpoints.Small);

  public readonly currentBreakpoint$ = this._currentBreakpoint.asObservable();

  public readonly Breakpoints = Breakpoints;

  private _breakpointChanged(): void {
    if (this.breakpointObserver.isMatched(Breakpoints.XLarge))
      this._currentBreakpoint.next(Breakpoints.XLarge);
    if (this.breakpointObserver.isMatched(Breakpoints.Large))
      this._currentBreakpoint.next(Breakpoints.Large);
    else if (this.breakpointObserver.isMatched(Breakpoints.Medium))
      this._currentBreakpoint.next(Breakpoints.Medium);
    else if (this.breakpointObserver.isMatched(Breakpoints.Small))
      this._currentBreakpoint.next(Breakpoints.Small);
    else if (this.breakpointObserver.isMatched(Breakpoints.XSmall))
      this._currentBreakpoint.next(Breakpoints.XSmall);
    else if (this.breakpointObserver.isMatched("(min-width: 500px)"))
      this._currentBreakpoint.next("(min-width: 500px)");
  }
}
