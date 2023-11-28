import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";

export interface LowQuantityStockItem {
  name: string;
  amountLeft: number;
  photo: string;
}

@Component({
  selector: 'app-main-low-quantity-stock-view',
  standalone: true,
  imports: [CommonModule, MatListModule, NgOptimizedImage, MatTableModule, MatGridListModule],
  templateUrl: './main-low-quantity-stock-view.component.html',
  styleUrl: './main-low-quantity-stock-view.component.scss'
})
export class MainLowQuantityStockViewComponent {
  displayedColumns = ['position', 'name', 'amount'];
  dataSource = Pending;
}
export interface LowQuantityStockView {
  name: string;
  position: number;
  amount: number;
}

const Pending: LowQuantityStockView[] = [
  {position: 1, name: 'Elephant Pants', amount: 13},
  {position: 2, name: 'Cat Pants', amount: 13},
  {position: 3, name: 'Cat Pants', amount: 13},
  {position: 4, name: 'Cat Pants', amount: 13},
  {position: 5, name: 'Cat Pants', amount: 13},
];

