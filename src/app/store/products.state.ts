import { IProduct } from 'src/app/admin/utils/interfaces/products.interface';

export interface AdminStates {
  categoryList: string[] | null;
  categoryProducts: IProduct[] | null;
}

export const productsInitialState: AdminStates = {
  categoryList: null,
  categoryProducts: null,
};
