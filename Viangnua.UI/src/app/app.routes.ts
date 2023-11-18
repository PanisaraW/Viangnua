import { Routes } from '@angular/router';
import {MainViewComponent} from "./main-view/main-view.component";
import {InventoryViewComponent} from "./inventory-view/inventory-view.component";
import {ReportsViewComponent} from "./reports-view/reports-view.component";
import {SuppliersViewComponent} from "./suppliers-view/suppliers-view.component";
import {OrdersViewComponent} from "./orders-view/orders-view.component";

export const routes: Routes = [
  { path: '', redirectTo:'/main', pathMatch:'full'},
  { path: 'main', component: MainViewComponent },
  { path: 'inventory', component: InventoryViewComponent },
  { path: 'reports', component: ReportsViewComponent },
  { path: 'suppliers', component: SuppliersViewComponent },
  { path: 'orders', component: OrdersViewComponent },
];
