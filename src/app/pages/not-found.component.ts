import { Component } from "@angular/core";

@Component({
  selector: "not-found",
  template: `
    <div class="w-full h-screen flex flex-col justify-center items-center">
      <img
        class="sm:h-2/3 md:h-1/2 w-auto h-auto"
        src="assets/images/404.webp"
        alt="Not found"
      />
    </div>
  `,
})
export class NotFoundComponent {}
