import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menu-item';
import { MenuService } from '../../services/menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders = [];
  totalPrice: number;
  user = 'rustam.aminov@sibers.com';

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.menuService.getOrders();
    this.totalPrice = 0;

    this.orders = [
      {
        id: 0,
        username: 'rustam.aminov@sibers.com',
        order: [
          { id: 0, name: 'Удон', price: 60, checked: true, disabled: false },
          { id: 0, name: 'Курица в соусе терияки', price: 70, checked: true, disabled: false },
          { id: 1, name: 'Вешанки', price: 30, checked: true, disabled: false }
        ]
      },
      {
        id: 1,
        username: 'kanat.dzhumaliev@sibers.com',
        order: [
          { id: 1, name: 'Рамен', price: 60, checked: true, disabled: false },
          { id: 1, name: 'Курица в пекинском соусе', price: 70, checked: true, disabled: false },
          { id: 0, name: 'Курица', price: 40, checked: true, disabled: false }
        ]
      }
    ];

    this.orders.map(userOrder => {
      userOrder.order.map(order => {
        this.totalPrice += order.price;
      });
    });
  }

  calcSingleOrder(order: MenuItem[]): number {
    let price = 0;
    order.map(item => price += Number(item.price));
    return price;
  }

  onDelete(order: MenuItem): void {

  }

  onEdit(order: MenuItem): void {
    localStorage.setItem('order', JSON.stringify(order));
    this.router.navigate(['/menu', {'edit': order.id}]);
  }

}
