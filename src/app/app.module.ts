import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { appEffects, appReducers } from './app.state';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppRoutingModule.Components],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(appEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
