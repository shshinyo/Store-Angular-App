import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SnackBarService } from "@core/services/modal.service";
import { SharedModule } from "@shared/shared.module";
import { TooltipPositions } from "@shared/utils/button-properties";

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: "copy-text",
  templateUrl: "./copy-text.component.html",
  styleUrls: ["./copy-text.component.scss"],
})
export class CopyTextComponent {
  public constructor(private readonly _snackBarService: SnackBarService) {}

  @Input() public readonly text: unknown;

  @Input() public readonly hoverable?: boolean = false;

  @Input() public readonly copyClass?: string = "";

  public readonly tooltipPosition: TooltipPositions = TooltipPositions.ABOVE;

  public show: boolean = false;

  public onCopyText = (): void => {
    if (this.text) {
      navigator.clipboard.writeText(String(this.text));
      this._snackBarService.snackbar("Text copied successfully🚀");
    }
  };
}
