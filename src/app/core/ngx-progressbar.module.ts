import { NgModule } from "@angular/core";
import { NgProgressModule } from "ngx-progressbar";
import { NgProgressHttpModule } from "ngx-progressbar/http";

@NgModule({
  imports: [
    NgProgressModule.withConfig({
      color: "#00bffa",
      trickleSpeed: 800,
      spinner: false,
    }),
    NgProgressHttpModule,
  ],
  exports: [NgProgressModule, NgProgressHttpModule],
})
export class NgxProgressBarModule {}
