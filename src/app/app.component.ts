import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { LanguageService } from './services/language.service';
import { AppSplashScreenService } from './services/loader.service';

@Component({
  selector: 'app-root',
  template: `<ng-progress></ng-progress>
    <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly router: Router,
    private readonly loadingService: AppSplashScreenService,
    private readonly iconRegistry: MatIconRegistry
  ) {
    this.iconRegistry.setDefaultFontSetClass('material-icons-round');
  }

  private readonly unsubscribeSub$ = new Subject<unknown>();
  public ngOnInit(): void {
    this.routerObserver();
  }

// detect Router navigation status to make the required actions.
// #TODO separate navigation status handling into separate service .
  private routerObserver = (): void => {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap(() => {
          window.scrollTo(0, 0);
          this.loadingService.hide();
        }),
        takeUntil(this.unsubscribeSub$)
      )
      .subscribe();
  };

  public ngOnDestroy(): void {
    // clear subscription
    this.unsubscribeSub$.next(undefined);
    this.unsubscribeSub$.complete();
  }
}
