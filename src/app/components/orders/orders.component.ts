import { Component, OnInit } from '@angular/core';
// import { MenuItem } from '../menu/menu-item';
import { MenuService } from '../../services/menu/menu.service';
import { MenuItem } from "../menu/menu-item";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders = [];
  totalPrice: number;

  constructor(
    private menuService: MenuService,
  ) {}

  ngOnInit() {
    this.menuService.getOrders();
    this.totalPrice = 0;

    this.orders = [
      {
        username: 'rustam.aminov@sibers.com',
        order: [
          { id: 0, name: 'Удон', price: 60 },
          { id: 0, name: 'Курица в соусе терияки', price: 70 },
          { id: 1, name: 'Вешанки', price: 30 }
        ]
      },
      {
        username: 'kanat.dzhumaliev@sibers.com',
        order: [
          { id: 1, name: 'Рамен', price: 60 },
          { id: 1, name: 'Курица в пекинском соусе', price: 70 },
          { id: 0, name: 'Курица', price: 40 }
        ]
      }
    ];

    this.orders.map(userOrder => {
      userOrder.order.map(order => {
        this.totalPrice += order.price;
      })
    })
  }

  calcSingleOrder(order: MenuItem[]): number {
    let price = 0;
    order.map(item => price += Number(item.price))
    return price
  }

}
