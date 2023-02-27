import { createAction, props } from '@ngrx/store';
import { IProduct } from '../utils/interfaces/products.interface';

export enum adminActionEnum {
  GET_ALL_PRODUCTS = '[PRODUCTS] GET ALL PRODUCTS',
  GET_ALL_PRODUCTS_SUCCESS = '[PRODUCTS] GET ALL PRODUCTS SUCCESS',
  GET_ALL_PRODUCTS_FAILED = '[PRODUCTS] GET ALL PRODUCTS FAILED',

  DELETE_PRODUCT = '[PRODUCTS] DELETE PRODUCT',
  DELETE_PRODUCT_SUCCESS = '[PRODUCTS] DELETE PRODUCT SUCCESS',
  DELETE_PRODUCT_FAILED = '[PRODUCTS] DELETE PRODUCT FAILED',

  UPDATE_PRODUCT = '[PRODUCTS] UPDATE PRODUCT',
  UPDATE_PRODUCT_SUCCESS = '[PRODUCTS] UPDATE PRODUCT SUCCESS',
  UPDATE_PRODUCT_FAILED = '[PRODUCTS] UPDATE PRODUCT FAILED',

  CREATE_PRODUCT = '[PRODUCTS] CREATE PRODUCT',
  CREATE_PRODUCT_SUCCESS = '[PRODUCTS] CREATE PRODUCT SUCCESS',
  CREATE_PRODUCT_FAILED = '[PRODUCTS] CREATE PRODUCT FAILED',

  GET_ALL_CATEGORY = '[CATEGORY] GET ALL CATEGORY',
  GET_ALL_CATEGORY_SUCCESS = '[CATEGORY] GET ALL CATEGORY  SUCCESS',
  GET_ALL_CATEGORY_FAIL = '[CATEGORY] GET ALL CATEGORY FAIL',
}

export const GetAllProducts = createAction(adminActionEnum.GET_ALL_PRODUCTS);
export const GetAllProductsSuccess = createAction(
  adminActionEnum.GET_ALL_PRODUCTS_SUCCESS,
  props<{ productsList: IProduct[] }>()
);
export const GetAllProductsFailed = createAction(
  adminActionEnum.GET_ALL_PRODUCTS_FAILED
);

export const DeleteProduct = createAction(
  adminActionEnum.DELETE_PRODUCT,
  props<{ prod: IProduct }>()
);
export const DeleteProductSuccess = createAction(
  adminActionEnum.DELETE_PRODUCT_SUCCESS,
  props<{ prod: IProduct }>()
);
export const DeleteProductFailed = createAction(
  adminActionEnum.DELETE_PRODUCT_FAILED
);

export const UpdateProduct = createAction(
  adminActionEnum.UPDATE_PRODUCT,
  props<{ prod: IProduct }>()
);
export const UpdateProductSuccess = createAction(
  adminActionEnum.UPDATE_PRODUCT_SUCCESS,
  props<{ prod: IProduct }>()
);
export const UpdateProductFailed = createAction(
  adminActionEnum.UPDATE_PRODUCT_FAILED
);

export const CreateProduct = createAction(
  adminActionEnum.CREATE_PRODUCT,
  props<{ prod: IProduct }>()
);
export const CreateProductSuccess = createAction(
  adminActionEnum.CREATE_PRODUCT_SUCCESS,
  props<{ prod: IProduct }>()
);
export const CreateProductFailed = createAction(
  adminActionEnum.CREATE_PRODUCT_FAILED
);

export const GetAllCategories = createAction(adminActionEnum.GET_ALL_CATEGORY);

export const GetAllCategoriesSuccess = createAction(
  adminActionEnum.GET_ALL_CATEGORY_SUCCESS,
  props<{ allCategories: string[] }>()
);

export const GetAllCategoriesFail = createAction(
  adminActionEnum.GET_ALL_CATEGORY_FAIL
);
