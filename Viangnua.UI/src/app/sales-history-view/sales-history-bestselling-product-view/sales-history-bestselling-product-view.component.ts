import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-sales-history-bestselling-product-view',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './sales-history-bestselling-product-view.component.html',
  styleUrl: './sales-history-bestselling-product-view.component.scss'
})
export class SalesHistoryBestsellingProductViewComponent {
  displayedColumns = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122,},
];
