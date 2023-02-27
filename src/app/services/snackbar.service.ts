import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { directionService } from './direction.service';

export type SnackBarVariant = 'normal' | 'success' | 'error';

const panelClass = (variant?: SnackBarVariant): string[] | undefined => {
  return variant === 'success'
    ? ['snack-success']
    : variant === 'error'
    ? ['snack-error']
    : undefined;
};

@Injectable({ providedIn: 'root' })
export class SnackBarService {
  public constructor(
    private readonly snackBar: MatSnackBar,
    private readonly translate: TranslateService,
    private readonly direction: directionService
  ) {}

  public snackbar = (
    message: string,
    variant?: SnackBarVariant,
    duration = 5000
  ): void => {
    this.snackBar.open(message, this.translate.instant('close'), {
      direction: this.direction.direction,
      duration,
      panelClass: panelClass(variant),
    });
  };
}
