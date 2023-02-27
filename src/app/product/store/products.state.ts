import { IProduct } from 'src/app/dashborad/utils/interfaces/products.interface';

export interface AdminStates {
  categoryList: string[] | null;
  categoryProducts: IProduct[] | null;
}

export const productsInitialState: AdminStates = {
  categoryList: null,
  categoryProducts: null,
};
