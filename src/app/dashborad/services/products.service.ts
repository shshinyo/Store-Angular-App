import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionService } from 'src/app/services/connection.service';
import { Endpoints } from 'src/app/core/models/endpoints';
import { IProduct } from '../utils/interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public constructor(private readonly _connectionService: ConnectionService) {}

  private readonly endpoints: Endpoints = new Endpoints();

  public allProducts$: Observable<IProduct[]> = this._connectionService.get(
    this.endpoints.dashboard.getAllProducts
  );

  public deleteProduct = (prodId: number): Observable<any> =>
    this._connectionService.delete(
      this.endpoints.dashboard.deleteProduct + prodId
    );

  public updateProduct = (payload: any): Observable<any> =>
    this._connectionService.put(
      this.endpoints.dashboard.updateProduct + payload?.id,
      payload
    );

  public addNewProduct = (payload: any): Observable<any> =>
    this._connectionService.post(
      this.endpoints.dashboard.addNewProduct,
      payload
    );
}
