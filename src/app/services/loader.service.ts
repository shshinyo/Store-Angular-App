import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AppSplashScreenService {
  public constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  public hide = (): void =>
    this._document.getElementById('preloader')?.classList.add('hidden');
}
