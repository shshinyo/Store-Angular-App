import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageService } from 'src/app/services/language.service';
import { ILanguage, Languages } from 'src/app/core/models/language.model';

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './language.component.html',
})
export class LanguageComponent {
  public constructor(private readonly langService: LanguageService) { }

  public availableLanguages: ILanguage[] = Languages;

  public selectedLang: ILanguage = Languages.find(
    (lang) => lang?.id === this.langService.lang
  ) as ILanguage;

  public onSelectLang(lang: ILanguage) {
    this.selectedLang = lang;
    this.langService.setLanguage(lang?.id);
  }
}
