import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "shimmer-loading",
  template: `
    <div class="p-3 shimmer-loading">
      <ng-container *ngFor="let load of loadings; let isFirst = first">
        <div
          class="comment animate"
          [ngStyle]="{ 'margin-top.px': isFirst ? 0 : 20 }"
        ></div>
      </ng-container>
    </div>
  `,
  styleUrls: ["./shimmer-loading.component.scss"],
})
export class ShimmerLoadingComponent implements OnInit {
  public readonly loadings: number[] = [];

  @HostBinding("class") public shimmer = "w-full";

  @Input() public set loadingsCount(val: number) {
    this.pushLoading(val);
  }

  public ngOnInit(): void {
    this.loadings?.length <= 0 && this.pushLoading(10);
  }

  private pushLoading = (count: number): void => {
    for (let i = 0; i < count; i++) {
      this.loadings.push(+i);
    }
  };
}
