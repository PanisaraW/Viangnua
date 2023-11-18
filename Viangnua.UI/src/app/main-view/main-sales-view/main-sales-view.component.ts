import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-main-sales-view',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './main-sales-view.component.html',
  styleUrl: './main-sales-view.component.scss'
})
export class MainSalesViewComponent {

}
