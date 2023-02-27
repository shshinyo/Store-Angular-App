import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../utils/interfaces/products.interface';
import {
  CreateProduct,
  CreateProductFailed,
  CreateProductSuccess,
  DeleteProduct,
  DeleteProductFailed,
  DeleteProductSuccess,
  GetAllCategoriesFail,
  GetAllProducts,
  GetAllProductsSuccess,
  UpdateProduct,
  UpdateProductFailed,
  UpdateProductSuccess,
} from './admin.actions';

@Injectable()
export class AdminEffects {
  constructor(
    private readonly _actions: Actions,
    private readonly _productsService: ProductsService
  ) {}

  public getAllProducts$ = createEffect(() =>
    this._actions.pipe(
      ofType(GetAllProducts),
      switchMap(() =>
        this._productsService.allProducts$.pipe(
          switchMap((res) => of(GetAllProductsSuccess({ productsList: res }))),
          catchError(() => of(GetAllCategoriesFail()))
        )
      )
    )
  );

  public deleteProduct$ = createEffect(() =>
    this._actions.pipe(
      ofType(DeleteProduct),
      switchMap(({ prod }) =>
        this._productsService.deleteProduct(prod?.id as number).pipe(
          switchMap(() => of(DeleteProductSuccess({ prod }))),
          catchError(() => of(DeleteProductFailed()))
        )
      )
    )
  );

  public createProduct$ = createEffect(() =>
    this._actions.pipe(
      ofType(CreateProduct),
      switchMap(({ prod }) =>
        this._productsService.addNewProduct(prod).pipe(
          switchMap((res) => of(CreateProductSuccess({ prod: res }))),
          catchError(() => of(CreateProductFailed()))
        )
      )
    )
  );

  public updateProduct$ = createEffect(() =>
    this._actions.pipe(
      ofType(UpdateProduct),
      switchMap(({ prod }) =>
        this._productsService.updateProduct(prod).pipe(
          switchMap(() => of(UpdateProductSuccess({ prod }))),
          catchError(() => of(UpdateProductFailed()))
        )
      )
    )
  );
}
