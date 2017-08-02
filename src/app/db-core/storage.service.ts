import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  private KEY: string;

  constructor() {
    this.KEY = 'DATA';
  }

  save(value: any): void {
    localStorage.setItem(this.KEY, JSON.stringify(value));
  }

  get(): any {
    return JSON.parse(localStorage.getItem(this.KEY));
  }

}
