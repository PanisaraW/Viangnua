import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReportsBestsellingCategoryViewComponent
} from "./reports-bestselling-category-view/reports-bestselling-category-view.component";
import {
  ReportsBestsellingProductViewComponent
} from "./reports-bestselling-product-view/reports-bestselling-product-view.component";
import {ReportsOverviewViewComponent} from "./reports-overview-view/reports-overview-view.component";
import {ReportsProfitRevenueViewComponent} from "./reports-profit-revenue-view/reports-profit-revenue-view.component";

@Component({
  selector: 'app-reports-view',
  standalone: true,
  imports: [CommonModule, ReportsBestsellingCategoryViewComponent, ReportsBestsellingProductViewComponent, ReportsOverviewViewComponent, ReportsProfitRevenueViewComponent],
  templateUrl: './reports-view.component.html',
  styleUrl: './reports-view.component.scss'
})
export class ReportsViewComponent {

}
