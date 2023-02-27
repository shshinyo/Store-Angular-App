import { createReducer, on } from '@ngrx/store';
import * as categoryActions from './products.actions';
import { productsInitialState } from './products.state';

export const productsReducer = createReducer(
  productsInitialState,
  on(categoryActions.GetAllCategoriesSuccess, (state, { allCategories }) => {
    return {
      ...state,
      categoryList: [...allCategories],
    };
  }),
  on(
    categoryActions.GetCategoryProductsSuccess,
    (state, { categoryProducts }) => {
      return {
        ...state,
        categoryProducts: [...categoryProducts],
      };
    }
  )
);
