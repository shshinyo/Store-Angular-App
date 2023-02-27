import { Component, Input } from "@angular/core";

@Component({
  selector: "no-data",
  template: `
    <div
      class="h-full w-full flex flex-col justify-center items-center gap-4 p-5"
    >
      <div class="flex justify-center items-center">
        <div
          class="flex  items-center justify-center w-20 h-20 rounded-full"
          [ngClass]="
            ' text-gray-600 bg-gray-100 dark:text-gray-50 dark:bg-gray-600'
          "
        >
          <mat-icon style="height: 50px; width: 50px; font-size: 50px">{{
            icon ?? "manage_search"
          }}</mat-icon>
        </div>
      </div>

      <h3 class="font-medium text-xl">
        {{ text ?? "لا يوجد اي بيانات للعرض..." }}
      </h3>

      <ng-content></ng-content>
    </div>
  `,
})
export class NoDataComponent {
  @Input() public text?: string;

  @Input() public icon?: string;
}
