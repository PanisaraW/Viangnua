import { Routes } from '@angular/router';
import {MainViewComponent} from "./main-view/main-view.component";
import {SuppliersViewComponent} from "./suppliers-view/suppliers-view.component";
import {OrdersViewComponent} from "./orders-view/orders-view.component";
import {StockViewComponent} from "./stock-view/stock-view.component";
import {SalesHistoryViewComponent} from "./sales-history-view/sales-history-view.component";

export const routes: Routes = [
  { path: '', redirectTo:'/overview', pathMatch:'full'},
  { path: 'overview', component: MainViewComponent },
  { path: 'stock', component: StockViewComponent },
  { path: 'orders', component: OrdersViewComponent },
  { path: 'suppliers', component: SuppliersViewComponent },
  { path: 'sales-history', component: SalesHistoryViewComponent },
];
