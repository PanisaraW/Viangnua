import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-inventory-overall-view',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './inventory-overall-view.component.html',
  styleUrl: './inventory-overall-view.component.scss'
})
export class InventoryOverallViewComponent {

}
