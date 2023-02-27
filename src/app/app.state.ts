import { ActionReducerMap } from '@ngrx/store';

import * as AdminDashboard from './admin/store/index';
import * as Products from './store/index';

export interface IAppState {
  admin: AdminDashboard.AdminStates;
  products: Products.AdminStates;
}

export const appReducers: ActionReducerMap<IAppState> = {
  admin: AdminDashboard.adminReducer,
  products: Products.productsReducer,
};

export const appEffects: Array<any> = [
  AdminDashboard.AdminEffects,
  Products.ProductsEffects,
];
