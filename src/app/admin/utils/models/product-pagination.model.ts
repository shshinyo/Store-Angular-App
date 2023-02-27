import { ClassProperties } from '@shared/helpers/types';
import { TableConfig } from '@shared/utils/models/table-config.model';

export class IProductPagination extends TableConfig {
  public category: string = '';

  public constructor(args?: ClassProperties<IProductPagination>) {
    super(args as ClassProperties<IProductPagination>);
    if (args && Object.keys(args).length) {
      Object.assign(this, args);
    }
  }
}

export const enum QUERY {
  INDEX = 'index',
  SIZE = 'size',
  SEARCH = 'search',
  CATEGORY = 'category',
}
