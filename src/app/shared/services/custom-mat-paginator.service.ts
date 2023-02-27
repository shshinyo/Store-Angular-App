import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class CustomMatPaginator extends MatPaginatorIntl {
  public constructor(private readonly translateService: TranslateService) {
    super();
    this.getAndInitTranslations();
  }

  public getAndInitTranslations = (): void => {
    this.itemsPerPageLabel =
      this.translateService.instant('itemsPerPageLabel');
    this.nextPageLabel = 'Next page';
    this.previousPageLabel = 'Previous page';
    this.changes.next();
  };

  public override getRangeLabel = (
    page: number,
    pageSize: number,
    length: number
  ): string => {
    if (length === 0 || pageSize === 0) {
      return `0 / ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex} ${this.translateService.instant(
      'from'
    )} ${length}`;
  };
}
