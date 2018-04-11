import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from '../components/auth/auth.component';
import { MenuComponent } from '../components/menu/menu.component';
import { OrdersComponent } from '../components/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
