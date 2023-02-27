import { IProduct } from '../utils/interfaces/products.interface';

export interface AdminStates {
  productsList: IProduct[] | null;
  productDeletedSuccess: boolean | null;
  productUpdatedSuccess: boolean | null;
  productCreatedSuccess: boolean | null;
}

export const adminInitialState: AdminStates = {
  productsList: null,
  productDeletedSuccess: null,
  productUpdatedSuccess: null,
  productCreatedSuccess: null,
};
