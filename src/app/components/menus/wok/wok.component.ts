import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from '../../menu/menu-item';

@Component({
  selector: 'app-wok',
  templateUrl: './wok.component.html',
  styleUrls: ['./wok.component.css']
})

export class WokComponent {
  @Output() addToOrder: EventEmitter<any> = new EventEmitter<any>();
  @Input() fillers: MenuItem[];
  @Input() misc: MenuItem[];
  @Input() noodles: MenuItem[];

  onAddToOrder(item: MenuItem, event: any): void {
   this.addToOrder.emit({item, event});
  }
}
