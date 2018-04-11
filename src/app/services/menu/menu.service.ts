import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  constructor() { }

  getWok(): void {
    console.log('wok has been called');
  }
}
