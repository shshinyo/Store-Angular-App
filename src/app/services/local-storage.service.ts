import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private _storage = localStorage;

  /** Returns the object that matches the @key or null if not exist or empty */
  public get = (key: string): unknown | null => {
    const val = this._storage.getItem(key);

    if (val) {
      try {
        const obj = JSON.parse(val) || {};
        return !!obj ? obj : null;
      } catch (error) {
        this.remove(key);
        return null;
      }
    } else return null;
  };

  set = (key: string, value: any): boolean => {
    this._storage.setItem(key, JSON.stringify(value));
    return true;
  };

  public remove = (key: string): void => this._storage.removeItem(key);

  public clear = (): void => this._storage.clear();
}
