import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/app.state';
import { BidirectionallyService } from 'src/app/services/direction.service';
import { CreateProduct, GetAllCategories, UpdateProduct } from '../../store';
import { IAddEditProductFormGroup } from '../../utils/interfaces/add-edit-product-form-group.interface';
import { IProduct } from '../../utils/interfaces/products.interface';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html'
})
export class AddEditProductComponent implements OnInit {
  public constructor(
    private readonly fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public readonly data: {
      prod: IProduct;
    },
    public readonly _dialogRef: MatDialogRef<AddEditProductComponent>,
    private readonly toasterService: ToastrService,
    private readonly _direction: BidirectionallyService,
    private readonly translateService: TranslateService,
    private readonly store: Store<IAppState>
  ) {}

  public addEditProductForm: FormGroup<IAddEditProductFormGroup> =
    this.fb.group({
      title: new FormControl<string | null>(null, {
        nonNullable: true,
        validators: Validators.required,
      }),
      price: new FormControl<number | null>(null, {
        nonNullable: true,
        validators: [Validators.required, Validators.min(1)],
      }),
      category: new FormControl<string | null>(null, {
        nonNullable: true,
        validators: Validators.required,
      }),
      description: new FormControl<string | null>(null, {
        nonNullable: true,
      }),
      image: new FormControl<string | null>(null, {
        nonNullable: true,
      }),
    });

  public categories$: Observable<string[] | null> = this.store.pipe(
    select((state: IAppState) => state.products.categoryList)
  );

  public readonly direction$ = this._direction.direction$;

  public submitLoading = false;

  public get modalTitle(): string {
    return this.translateService.instant(
      !!this.data?.prod ? 'edit' : 'create'
    );
  }

  public ngOnInit(): void {
    this.store.dispatch(GetAllCategories());

    if (!!this.data?.prod) {
      this.addEditProductForm.patchValue({
        ...this.data?.prod,
        price: this.data?.prod?.price as any,
      });
    }
  }

  public onSubmit = (): void => {
    this.submitLoading = true;
    !!this.data?.prod ? this._updateProduct() : this._createNewProduct();
  };

  private _createNewProduct = (): void => {
    this.store.dispatch(
      CreateProduct({
        prod: {
          ...(this.addEditProductForm?.value as any),
        },
      })
    );

    this.store
      .pipe(select((state: IAppState) => state.admin.productCreatedSuccess))
      .subscribe({
        next: (res: boolean | null) => {
          if (typeof res === 'boolean') {
            res
              ? this.toasterService.success(
                  this.translateService.instant('createSuccess')
                )
              : this.toasterService.error(
                  this.translateService.instant('createFailed')
                );

            this.submitLoading = false;
            this.cancelHandler({});
          }
        },
      });
  };

  private _updateProduct = (): void => {
    this.store.dispatch(
      UpdateProduct({
        prod: {
          id: this.data?.prod?.id,
          ...(this.addEditProductForm?.value as any),
        },
      })
    );

    this.store
      .pipe(select((state: IAppState) => state.admin.productUpdatedSuccess))
      .subscribe({
        next: (res: boolean | null) => {
          if (typeof res === 'boolean') {
            res
              ? this.toasterService.success(
                  this.translateService.instant('updatedSuccess')
                )
              : this.toasterService.error(
                  this.translateService.instant('updatedFailed')
                );

            this.submitLoading = false;
            this.cancelHandler({});
          }
        },
      });
  };

  public cancelHandler = (res?: unknown): void =>
    this._dialogRef.close(res ?? null);
}
