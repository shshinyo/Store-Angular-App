import { CommonModule } from "@angular/common";
import {
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostListener,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { Subject, takeUntil } from "rxjs";

@Component({
  standalone: true,
  imports: [CommonModule,MatInputModule, FormsModule, ReactiveFormsModule],
  selector:
    "magic-search-input[formControlName],magic-search-input[ngModel],magic-search-input[formControl]",
  templateUrl: "./magic-search-input.component.html",
  styleUrls: ["./magic-search-input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MagicSearchInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MagicSearchInputComponent),
      multi: true,
    },
  ],
})
export class MagicSearchInputComponent implements OnDestroy {
  public constructor(private readonly fb: FormBuilder) {}

  private readonly _destroyAll$: Subject<unknown> = new Subject<unknown>();

  @ViewChild("input") public input!: ElementRef<HTMLInputElement>;

  @ViewChild("searchInput") public searchInput!: ElementRef<HTMLDivElement>;

  @Input() public type: string = "text";

  @Input() public char: string = "S";

  @Input() public placeholder: string = "Search...";

  @Input() public inputCLass?: string;

  @Input() public outlineOption: string = "2px solid gray";

  @Output() public blur: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Output() public focus: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Output() public change: EventEmitter<unknown> = new EventEmitter<unknown>(
    undefined
  );

  private _inputFocused!: boolean;

  public formControl: FormControl<unknown> = this.fb.control<unknown>(null);

  public onTouched: () => void = () => {};

  public writeValue(val: unknown): void {
    val && this.formControl.patchValue(val, { emitEvent: true });
  }

  public registerOnChange(fn: () => void): void {
    this.formControl.valueChanges
      .pipe(takeUntil(this._destroyAll$))
      .subscribe(fn);
  }

  public registerOnTouched = (fn: () => void) => (this.onTouched = fn);

  public setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  public validate(): ValidationErrors | null {
    return this.formControl.valid
      ? null
      : {
          invalidForm: {
            valid: false,
            message: "Form fields are invalid",
          },
        };
  }

  public onBlur(): void {
    this.searchInput.nativeElement.style.outline = "none";
    this._inputFocused = false;

    this.blur.emit();
  }

  public onFocus(): void {
    this.searchInput.nativeElement.style.outline = this.outlineOption;
    this._inputFocused = true;
    this.focus.emit();
  }

  @HostListener("document:keypress", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    const { key } = event;

    if (!this._inputFocused) {
      if (event.shiftKey && (key === this.char || key == "ٍ")) {
        this.input.nativeElement.focus();
        this.searchInput.nativeElement.style.outline = this.outlineOption;

        this.focus.emit();
        this._inputFocused = true;
        event.preventDefault();
      }
    }
  }

  public ngOnDestroy(): void {
    this._destroyAll$.next(undefined);
    this._destroyAll$.complete();
  }
}
