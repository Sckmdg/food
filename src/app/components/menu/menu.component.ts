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
  price = 0;
  order: MenuItem[] = [];
  fillers: MenuItem[] = [];
  misc: MenuItem[] = [];
  noodles: MenuItem[] = [];
  todaysMenu = 'wok';

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todaysMenu = this.menuService.getTodaysMenu();
    // TODO ob subscribe method swich case for different menus
    this.menuService.getWok();

    this.noodles = [
      { id: 0, name: 'Удон', price: 60, checked: false, disabled: false },
      { id: 1, name: 'Рамен', price: 60, checked: false, disabled: false }
    ];

    this.fillers = [
      { id: 0, name: 'Курица в соусе терияки', price: 70, checked: false, disabled: false },
      { id: 1, name: 'Курица в пекинском соусе', price: 70, checked: false, disabled: false }
    ];

    this.misc = [
      { id: 0, name: 'Курица', price: 40, checked: false, disabled: false },
      { id: 1, name: 'Вешанки', price: 30, checked: false, disabled: false }
    ];

    if (JSON.parse(localStorage.getItem('order'))) {
      const order = JSON.parse(localStorage.getItem('order')).order;
      order.map(item => {

        this.noodles.map(noodle => {
          if (this.compareItemFields(noodle, item)) {
            noodle.checked = true;
            this.order.push(item);
            this.price += item.price;
          }
        });

        this.fillers.map(filler => {
          if (this.compareItemFields(filler, item)) {
            filler.checked = true;
            this.order.push(item);
            this.price += item.price;
          }
        });

        this.misc.map(misc => {
          if (this.compareItemFields(misc, item)) {
            misc.checked = true;
            this.order.push(item);
            this.price += item.price;
          }
        });
      });

      localStorage.removeItem('order');
    }

    // this.menuService.getTest(1)
    //   .subscribe(
    //     test => console.log(test),
    //     error => console.log(error)
    //   );
  }

  addToOrder(response: any): void {
    const { event, item } = response;

    if (event.target.checked) {
      this.order.push(item);
      this.price += item.price;
    } else {
      this.order = this.order.filter(h => {
        item.checked = false;
        h.checked = false;
        return JSON.stringify(h) !== JSON.stringify(item);
      });
      this.price -= item.price;
    }
  }

  sendOrder(): void {
    if (this.price) {
      console.log('order has been sent');
      this.router.navigate(['/orders']);
    }
  }

  compareItemFields(first: MenuItem, second: MenuItem): boolean {
    return first.id === second.id && first.name === second.name && first.price === second.price;
  }

}
