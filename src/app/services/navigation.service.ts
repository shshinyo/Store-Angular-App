import { Injectable } from "@angular/core";
import { Location } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";

@Injectable({ providedIn: "root" })
export class NavigationService {
  public constructor(private router: Router, private location: Location) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        !this._history.includes(event.urlAfterRedirects) &&
          this._history.push(event.urlAfterRedirects);
      }
    });
  }

  private _history: string[] = [];

  public get hasHistory(): boolean {
    return this._history.length > 1;
  }

  public back = (): void => {
    this._history.pop();

    if (this._history.length > 0) this.location.back();
    else this.router.navigateByUrl("/");
  };

  public getHistory = (): string[] => this._history;
}
