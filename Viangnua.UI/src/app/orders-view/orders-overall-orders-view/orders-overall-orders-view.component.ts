import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-orders-overall-orders-view',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './orders-overall-orders-view.component.html',
  styleUrl: './orders-overall-orders-view.component.scss'
})
export class OrdersOverallOrdersViewComponent {

}
