import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { EnsureModuleLoadedOnceGuard } from './guards/loaded-once.guard';

import { ErrorInterceptorService } from 'src/app/services/error-interceptor.service';
import { NgxTranslateModule } from './ngx-translate.module';
import { NgxProgressBarModule } from './ngx-progressbar.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxProgressBarModule,
    NgxTranslateModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      easeTime: 700,
      positionClass: 'toast-bottom-left',
    }),
  ],
  exports: [HttpClientModule, NgxProgressBarModule, NgxTranslateModule],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  public constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptorService,
          multi: true,
        },
      ],
    };
  }
}
