import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { MenuService } from '../../services/menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  price: number;
  order: MenuItem[] = [];
  fillers: MenuItem[] = [];
  misc: MenuItem[] = [];
  noodles: MenuItem[] = [];

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.price = 0;
    this.menuService.getWok();

    this.noodles = [
      { id: 0, name: 'Удон', price: 60 },
      { id: 1, name: 'Рамен', price: 60 }
    ];

    this.fillers = [
      { id: 0, name: 'Курица в соусе терияки', price: 70 },
      { id: 1, name: 'Курица в пекинском соусе', price: 70 }
    ];

    this.misc = [
      { id: 0, name: 'Курица', price: 40 },
      { id: 1, name: 'Вешанки', price: 30 }
    ];

    this.menuService.getTest(1)
      .subscribe(
        test => console.log(test),
        error => console.log(error)
      );
  }

  addToOrder(item: MenuItem, event: any): void {
    if (event.target.checked) {
      this.order.push(item);
      this.price += item.price;
    } else {
      this.order = this.order.filter(h => h !== item);
      this.price -= item.price;
    }
  }

  sendOrder(): void {
    if (this.price) {
      console.log('order has been sent');
      this.router.navigate(['/orders']);
    }
  }

}
