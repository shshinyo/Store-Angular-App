import { Component, Input, Output, EventEmitter } from "@angular/core";
import {
  ButtonTypes,
  ButtonColors,
  TooltipPositions,
} from "src/app/shared/utils/button-properties";

type ButtonType = "button" | "reset" | "submit";
@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  public readonly ButtonTypes = ButtonTypes;

  @Output() public readonly clicked = new EventEmitter();

  @Input() public matType?: ButtonTypes = ButtonTypes.basic;

  @Input() public type?: ButtonType = "button";

  @Input() public color?: ButtonColors;

  @Input() public text?: string;

  @Input() public icon?: string;

  @Input() public svgIcon?: string;

  @Input() public bgColor?: string;

  @Input() public toolTip: string = null!;

  @Input() public tooltipPosition: TooltipPositions = TooltipPositions.ABOVE;

  @Input() public route?: string;

  @Input() public disabled?: boolean;

  @Input() public isLoading?: boolean;

  @Input() public isFullWidth?: boolean;

  @Input() public url?: boolean;

  @Input() public target?: boolean;
  /** @description we shouldn't use class as it will cause duplication on 2 dom elms */
  @Input() public btnClass?: string;
}
