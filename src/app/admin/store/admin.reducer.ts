import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../utils/interfaces/products.interface';
import * as categoryActions from './admin.actions';
import { adminInitialState } from './admin.state';

export const adminReducer = createReducer(
  adminInitialState,
  on(categoryActions.GetAllProductsSuccess, (state, { productsList }) => {
    return {
      ...state,
      productsList: [...productsList],
    };
  }),
  on(categoryActions.DeleteProductSuccess, (state, { prod }) => {
    return {
      ...state,
      productsList: state?.productsList?.filter(
        (p) => p?.id !== prod?.id
      ) as [],
      productDeletedSuccess: true,
    };
  }),
  on(categoryActions.DeleteProductFailed, (state) => {
    return {
      ...state,
      productDeletedSuccess: false,
    };
  }),
  on(categoryActions.UpdateProductSuccess, (state, { prod }) => {
    return {
      ...state,
      productsList: state?.productsList?.map((p) => {
        return p?.id == prod?.id ? { ...p, ...prod } : p;
      }) as [],
      productUpdatedSuccess: true,
    };
  }),
  on(categoryActions.UpdateProductFailed, (state) => {
    return {
      ...state,
      productUpdatedSuccess: false,
    };
  }),
  on(categoryActions.CreateProductSuccess, (state, { prod }) => {
    return {
      ...state,
      productsList: [prod, ...(state?.productsList as IProduct[])],
      productCreatedSuccess: true,
    };
  }),
  on(categoryActions.CreateProductFailed, (state) => {
    return {
      ...state,
      productCreatedSuccess: false,
    };
  })
);
