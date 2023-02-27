import { Direction } from '@angular/cdk/bidi';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BidirectionallyService } from './direction.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  public constructor(
    private readonly translateService: TranslateService,
    public readonly directionService: BidirectionallyService
  ) {
    localStorage.getItem('lang') ?? localStorage.setItem('lang', 'en');
    this.setLanguage(
      JSON.parse(JSON.stringify(localStorage.getItem('lang'))) as string
    );
  }

  public languages: string[] = ['en', 'ar','es','fr'];

  public lang!: string;

  public setLanguage(lang: string): void {
    this.lang = lang;
    const dir: Direction = (lang === 'en' || lang === 'es' || lang === 'fr')
                           ? 'ltr' : 'rtl';

    this.directionService.setDirection(dir);
    document.getElementsByTagName('html')[0].setAttribute('dir', dir);

    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
  }
}
