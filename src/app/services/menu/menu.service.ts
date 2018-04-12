import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MenuItem } from '../../components/menu/menu-item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MenuService {

  private menusUrl = 'api/menu';
  private testUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) {}

  getWok(): void {
    console.log('wok has been called');
  }

  getOrders(): void {
    console.log('orders has been called');
  }

  getTest(id: number): Observable<Object> {
    const url = `${this.testUrl}/posts/${id}`;
    return this.http.get<Object>(url);
  }
}
