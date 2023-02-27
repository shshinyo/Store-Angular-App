import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ModalSize } from '../../utils/enum/modal-size-enum';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { BidirectionallyService } from 'src/app/services/direction.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  public constructor(
    private readonly dialog: MatDialog,
    private readonly translateService: TranslateService,
    private readonly _direction: BidirectionallyService
  ) {}

  public Confirm(
    message: string,
    title?: string,
    ok?: string,
    close: string = this.translateService.instant('cancel')
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: ModalSize.MEDIUM,
      direction: this._direction.direction,
      hasBackdrop: true,
      restoreFocus: false,
      disableClose: true,
      closeOnNavigation: true,
      data: {
        title: title,
        message: message,
        ok: ok,
        close: close,
      },
    });
    return dialogRef.afterClosed().pipe(take(1));
  }
}
