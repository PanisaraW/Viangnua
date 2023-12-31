import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TopSellingStockViewComponent} from "./main-top-selling-stock-view/main-top-selling-stock-view.component";
import {MainLowQuantityStockViewComponent} from "./main-low-quantity-stock-view/main-low-quantity-stock-view.component";
import {GraphOverviewComponent} from "./graph-overview/graph-overview.component";
import {MainReminderViewComponent} from "./main-reminder-view/main-reminder-view.component";

@Component({
  imports: [CommonModule, TopSellingStockViewComponent, MainLowQuantityStockViewComponent, GraphOverviewComponent, MainReminderViewComponent],
  selector: 'app-main-view',
  standalone: true,
  styleUrls: ['../../shared-style/shared-view.scss', './main-view.component.scss'],
  templateUrl: './main-view.component.html'
})
export class MainViewComponent {

}
