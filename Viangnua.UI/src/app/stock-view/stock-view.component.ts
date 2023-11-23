import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockOverallViewComponent} from "./stock-overall-view/stock-overall-view.component";
import {StockProductViewComponent} from "./stock-product-view/stock-product-view.component";

@Component({
  selector: 'app-inventory-view',
  standalone: true,
  imports: [CommonModule, StockOverallViewComponent, StockProductViewComponent],
  templateUrl: './stock-view.component.html',
  styleUrl: './stock-view.component.scss'
})
export class StockViewComponent {

}
