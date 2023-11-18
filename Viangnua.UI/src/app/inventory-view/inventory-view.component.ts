import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InventoryOverallViewComponent} from "./inventory-overall-view/inventory-overall-view.component";
import {InventoryProductViewComponent} from "./inventory-product-view/inventory-product-view.component";

@Component({
  selector: 'app-inventory-view',
  standalone: true,
  imports: [CommonModule, InventoryOverallViewComponent, InventoryProductViewComponent],
  templateUrl: './inventory-view.component.html',
  styleUrl: './inventory-view.component.scss'
})
export class InventoryViewComponent {

}
