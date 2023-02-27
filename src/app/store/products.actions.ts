import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/admin/utils/interfaces/products.interface';

export enum productsActionEnum {
  GET_ALL_CATEGORY = '[CATEGORY] GET ALL CATEGORY',
  GET_ALL_CATEGORY_SUCCESS = '[CATEGORY] GET ALL CATEGORY  SUCCESS',
  GET_ALL_CATEGORY_FAIL = '[CATEGORY] GET ALL CATEGORY FAIL',

  GET_CATEGORIES_PRODUCTS = '[CATEGORY] GET CATEGORY PRODUCTS',
  GET_CATEGORIES_PRODUCTS_SUCCESS = '[CATEGORY] GET CATEGORY PRODUCTS SUCCESS',
  GET_CATEGORIES_PRODUCTS_FAIL = '[CATEGORY] GET CATEGORY PRODUCTS FAIL',
}

export const GetAllCategories = createAction(
  productsActionEnum.GET_ALL_CATEGORY
);

export const GetAllCategoriesSuccess = createAction(
  productsActionEnum.GET_ALL_CATEGORY_SUCCESS,
  props<{ allCategories: string[] }>()
);

export const GetAllCategoriesFail = createAction(
  productsActionEnum.GET_ALL_CATEGORY_FAIL
);

export const GetCategoryProducts = createAction(
  productsActionEnum.GET_CATEGORIES_PRODUCTS,
  props<{ categoryName: string }>()
);

export const GetCategoryProductsSuccess = createAction(
  productsActionEnum.GET_CATEGORIES_PRODUCTS_SUCCESS,
  props<{ categoryProducts: IProduct[] }>()
);

export const GetCategoryProductsFail = createAction(
  productsActionEnum.GET_CATEGORIES_PRODUCTS_FAIL
);
