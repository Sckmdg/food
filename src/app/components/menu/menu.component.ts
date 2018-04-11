import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  noodles: MenuItem[];
  fillers: MenuItem[];
  misc: MenuItem[];

  constructor(
    private menuService: MenuService
  ) {}

  ngOnInit() {
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
  }

}
