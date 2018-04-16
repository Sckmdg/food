import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { AuthService } from './services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu/menu.service';
import { OrdersComponent } from './components/orders/orders.component';
import { WokComponent } from './components/menus/wok/wok.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MenuComponent,
    OrdersComponent,
    WokComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  providers: [AuthService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
