import { ActionReducerMap } from '@ngrx/store';

import * as AdminDashboard from './dashborad/store/index';
import * as Products from './product/store/index';

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
