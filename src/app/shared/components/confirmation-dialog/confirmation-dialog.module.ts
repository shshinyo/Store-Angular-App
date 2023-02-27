import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ConfirmationDialogService } from "./confirmation-dialog.service";
import { MatIconModule } from "@angular/material/icon";
import { SharedModule } from "../../shared.module";

@NgModule({
  declarations: [ConfirmationDialogComponent],
  exports: [ConfirmationDialogComponent],
  imports: [CommonModule, SharedModule],
  providers: [ConfirmationDialogService],
})
export class ConfirmationDialogModule {}
