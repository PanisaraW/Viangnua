import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesHistoryOverviewViewComponent } from "./sales-history-overview-view/sales-history-overview-view.component";
import { SalesHistoryBestsellingCategoryViewComponent } from "./sales-history-bestselling-category-view/sales-history-bestselling-category-view.component";
import { SalesHistoryProfitRevenueViewComponent } from "./sales-history-profit-revenue-view/sales-history-profit-revenue-view.component";
import { SalesHistoryBestsellingProductViewComponent } from "./sales-history-bestselling-product-view/sales-history-bestselling-product-view.component";

@Component({
  selector: 'app-sales-history-view',
  standalone: true,
  imports: [
    CommonModule,
    SalesHistoryOverviewViewComponent,
    SalesHistoryBestsellingCategoryViewComponent,
    SalesHistoryProfitRevenueViewComponent,
    SalesHistoryBestsellingProductViewComponent
  ],
  templateUrl: './sales-history-view.component.html',
  styleUrls: ['./sales-history-view.component.scss']  // Corrected from styleUrl to styleUrls
})
export class SalesHistoryViewComponent {

}

