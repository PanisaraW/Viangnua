import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrdersOverallOrdersViewComponent} from "./orders-overall-orders-view/orders-overall-orders-view.component";
import {OrdersOrdersDetailsViewComponent} from "./orders-orders-details-view/orders-orders-details-view.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {OrderStatusComponent} from "./order-status/order-status.component";

@Component({
  selector: 'app-orders-view',
  standalone: true,
  imports: [CommonModule, OrdersOverallOrdersViewComponent, OrdersOrdersDetailsViewComponent, MatGridListModule, OrderStatusComponent],
  templateUrl: './orders-view.component.html',
  styleUrl: './orders-view.component.scss'
})
export class OrdersViewComponent {

}
