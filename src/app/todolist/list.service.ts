import {Item} from './item';
import {Injectable} from '@angular/core';

@Injectable()
export class ListService {

  private _items: Item[];


  constructor() {
    this._items = [];
  }

  get items() {
    return this._items;
  }

  addItem(title: string): void {
    // this._items.push(new Item(title));
    this._items = [ ...this._items, new Item(title) ];
  }
}
