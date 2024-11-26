import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetDataService {
  // Default asset data
  private initialData = [
    { value: 40, name: 'Stocks' },
    { value: 30, name: 'Bonds' },
    { value: 20, name: 'Real Estate' },
    { value: 10, name: 'Cash' },
  ];

  // BehaviorSubject to store the data
  private dataSubject = new BehaviorSubject(this.initialData);

  // Observable to provide data to other components
  assetData$ = this.dataSubject.asObservable();

  // Method to add new data
  addAsset(asset: { value: number; name: string }) {
    const currentData = this.dataSubject.getValue();
    const updatedData = [...currentData, asset];
    this.dataSubject.next(updatedData);
  }
}
