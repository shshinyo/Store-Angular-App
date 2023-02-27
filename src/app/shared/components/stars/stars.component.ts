import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'stars',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      *ngIf="rate"
      class="overflow-hidden"
      [ngStyle]="{ width: (rate / 5) * 116 + 'px' }"
    >
      <div class="w-[112px] flex flex-row justify-start items-center gap-1">
        <svg
          *ngFor="let item of [0, 0, 0, 0, 0]"
          class="w-5 h-5 fill-current text-blue-500"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
          />
        </svg>
      </div>
    </section>
  `,
})
export class StarsComponent {
  @Input() rate!: number | undefined;
}
