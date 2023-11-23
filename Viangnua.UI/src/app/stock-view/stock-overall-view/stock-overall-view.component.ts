import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-stock-overall-view',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatTableModule],
  templateUrl: './stock-overall-view.component.html',
  styleUrl: './stock-overall-view.component.scss'
})
export class StockOverallViewComponent {
  displayedColumns = ['position', 'name', 'amount'];
  dataSource = Pending;
}
export interface StockOverallView {
  name: string;
  position: number;
  amount: number;
}

const Pending: StockOverallView[] = [
  {position: 1, name: 'Elephant Pants', amount: 13},
  {position: 2, name: 'Cat Pants', amount: 13},
  {position: 3, name: 'Cat Pants', amount: 13},
  {position: 4, name: 'Cat Pants', amount: 13},
  {position: 5, name: 'Cat Pants', amount: 13},
];
