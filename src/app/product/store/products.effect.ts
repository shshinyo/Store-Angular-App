import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { CategoriesService } from '../services/categories.service';
import {
  GetAllCategories,
  GetAllCategoriesFail,
  GetAllCategoriesSuccess,
  GetCategoryProducts,
  GetCategoryProductsFail,
  GetCategoryProductsSuccess,
} from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly _actions: Actions,
    private readonly _category: CategoriesService
  ) {}

  public getAllCategories$ = createEffect(() =>
    this._actions.pipe(
      ofType(GetAllCategories),
      switchMap(() =>
        this._category.getCategories$.pipe(
          switchMap((res) =>
            of(GetAllCategoriesSuccess({ allCategories: res }))
          ),
          catchError(() => of(GetAllCategoriesFail()))
        )
      )
    )
  );

  public getCategoriesProducts$ = createEffect(() =>
    this._actions.pipe(
      ofType(GetCategoryProducts),
      switchMap(({ categoryName }) =>
        this._category.getCategoriesProducts(categoryName).pipe(
          switchMap((res) =>
            of(GetCategoryProductsSuccess({ categoryProducts: res }))
          ),
          catchError(() => of(GetCategoryProductsFail()))
        )
      )
    )
  );
}
