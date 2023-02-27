import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { TooltipPositions } from "@shared/utils/button-properties";
import { SnackBarService } from "src/app/services/snackbar.service";

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: "copy-text",
  templateUrl: "./copy-text.component.html",
  styleUrls: ["./copy-text.component.scss"],
})
export class CopyTextComponent {
  public constructor(private readonly snackBarService: SnackBarService) {}

  @Input() public readonly text: unknown;

  @Input() public readonly hoverable?: boolean = false;

  @Input() public readonly copyClass?: string = "";

  public readonly tooltipPosition: TooltipPositions = TooltipPositions.ABOVE;

  public show: boolean = false;

  public onCopyText = (): void => {
    if (this.text) {
      navigator.clipboard.writeText(String(this.text));
      this.snackBarService.snackbar("Text copied successfully🚀");
    }
  };
}
