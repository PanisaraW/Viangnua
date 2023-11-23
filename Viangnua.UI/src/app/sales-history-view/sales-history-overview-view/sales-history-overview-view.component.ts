import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-sales-history-overview-view',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatDividerModule],
  templateUrl: './sales-history-overview-view.component.html',
  styleUrl: './sales-history-overview-view.component.scss'
})
export class SalesHistoryOverviewViewComponent {

}
