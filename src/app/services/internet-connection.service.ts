import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class InternetConnectionService {
  public constructor(@Inject(DOCUMENT) private readonly _document: Document) {}

  private readonly _element: HTMLElement = this._document.getElementById(
    "internet-connection"
  ) as HTMLElement;

  public online = (): void => {
    this._element?.classList.add("hidden");
    this._element.style.display = "none";
  };

  public offline = (): void => {
    this._element?.classList.remove("hidden");
    this._element.style.display = "flex";
  };
}
