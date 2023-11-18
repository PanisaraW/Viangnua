import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainSalesViewComponent} from "./main-sales-view/main-sales-view.component";
import {MainPurchaseViewComponent} from "./main-purchase-view/main-purchase-view.component";
import {MainTopSellingStockViewComponent} from "./main-top-selling-stock-view/main-top-selling-stock-view.component";
import {MainLowQuantityStockViewComponent} from "./main-low-quantity-stock-view/main-low-quantity-stock-view.component";
import {MainOrderSummaryViewComponent} from "./main-order-summary-view/main-order-summary-view.component";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CommonModule, MainSalesViewComponent, MainPurchaseViewComponent, MainTopSellingStockViewComponent, MainLowQuantityStockViewComponent, MainOrderSummaryViewComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.scss'
})
export class MainViewComponent {

}
