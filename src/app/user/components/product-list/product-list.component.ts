import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Animations } from '@shared/animations/animations';
import { ParamsHelper } from '@shared/helpers/param-helper';
import {
  debounceTime,
  filter,
  from,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { IProduct } from 'src/app/admin/utils/interfaces/products.interface';
import { IAppState } from 'src/app/app.state';
import { GetAllCategories, GetCategoryProducts } from '../../../store';
import { QUERY } from '../../utils/models/category.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [Animations],
})
export class ProductListComponent implements OnInit, OnDestroy {
  public constructor(
    private readonly _fb: FormBuilder,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _store: Store<IAppState>
  ) {}

  private readonly _unsubscribe$ = new Subject<unknown>();

  public categories$: Observable<string[] | null> = this._store.pipe(
    select((state: IAppState) => state.products.categoryList),
    filter((res) => !!res),
    tap((res) => {
      !this._route.snapshot.queryParams[QUERY.CATEGORY_NAME] &&
        this._router.navigate([], {
          queryParams: {
            [QUERY.CATEGORY_NAME]: (res as string[]) || null,
          },
          queryParamsHandling: 'merge',
        });
    })
  );

  public filterForm: FormGroup = this._fb.group({
    search: null,
    category: null,
  });

  public productsList: IProduct[] = [];

  public productsLoaded: boolean = true;

  public ngOnInit(): void {
    this._store.dispatch(GetAllCategories());

    this._paramsChanges();
    this._searchChangeHandler();
  }

  private _searchChangeHandler = (): void => {
    this.filterForm.valueChanges
      .pipe(
        debounceTime(500),
        switchMap((val: any) =>
          from(
            this._router.navigate([], {
              queryParams: {
                [QUERY.CATEGORY_NAME]: val?.category || null,
              },
              queryParamsHandling: 'merge',
            })
          )
        ),
        takeUntil(this._unsubscribe$)
      )
      .subscribe();
  };

  private _paramsChanges = (): void => {
    this._route.queryParamMap
      .pipe(
        tap((params: ParamMap) => {
          const queryParams = {
            category: ParamsHelper.search(
              params,
              QUERY.CATEGORY_NAME
            ) as string,
            search: ParamsHelper.search(params, QUERY.SEARCH) as string,
          };

          if (!!queryParams?.category) {
            this._store.dispatch(
              GetCategoryProducts({ categoryName: queryParams?.category })
            );
          }

          this.filterForm.patchValue({ ...queryParams });
        }),
        switchMap(() => this._getProducts()),
        takeUntil(this._unsubscribe$)
      )
      .subscribe();
  };

  private _getProducts = (): Observable<IProduct[] | null> => {
    this.productsLoaded = false;

    return this._store
      .pipe(select((state: IAppState) => state.products.categoryProducts))
      .pipe(
        tap((res: IProduct[] | null) => {
          if (res?.length) {
            const search: string = this.filterForm.value?.search;

            this.productsList = search
              ? res.filter((prod) =>
                  prod?.title
                    ?.toLowerCase()
                    .includes(search?.toLowerCase() as string)
                )
              : res;

            this.productsLoaded = true;
          }
        })
      );
  };

  public ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
