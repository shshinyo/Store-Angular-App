import { ClassProperties } from '../../helpers/types';

export class TableConfig {
  public totalLength?: number | undefined = undefined;
  public index: number | undefined = 0;
  public size: number | undefined = 10;
  public search?: any | undefined | null = null;
  public pageSizeOptions: number[] = [10, 20, 50, 100];

  public constructor(args: ClassProperties<TableConfig>) {
    if (args && Object.keys(args).length) {
      Object.assign(this, args);
    }
  }
}
