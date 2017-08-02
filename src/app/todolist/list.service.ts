import {Injectable} from '@angular/core';
import {StorageService} from '../db-core/storage.service';
import {Item} from './item';

@Injectable()
export class ListService {

  private _items: Item[];
  private storage: StorageService;

  constructor(storage: StorageService) {
    this.storage = storage;
    this._items  = storage.get() || [];
  }

  get items() {
    return this._items;
  }

  addItem(title: string): void {
    // this._items.push(new Item(title));
    this._items = [...this._items, new Item(title)];
    this.storage.save(this.items);
  }
}
