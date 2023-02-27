import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { BidirectionallyService } from './direction.service';

export type SnackBarVariant = 'normal' | 'success' | 'error';

const _panelClass = (variant?: SnackBarVariant): string[] | undefined => {
  return variant === 'success'
    ? ['snack-success']
    : variant === 'error'
    ? ['snack-error']
    : undefined;
};

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  public constructor(
    private readonly _snackBar: MatSnackBar,
    private readonly _translate: TranslateService,
    private readonly _direction: BidirectionallyService
  ) {}

  public snackbar = (
    message: string,
    variant?: SnackBarVariant,
    duration = 5000
  ): void => {
    this._snackBar.open(message, this._translate.instant('close'), {
      direction: this._direction.direction,
      duration,
      panelClass: _panelClass(variant),
    });
  };
}
