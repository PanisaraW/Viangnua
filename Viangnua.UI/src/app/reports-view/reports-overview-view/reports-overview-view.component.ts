import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-reports-overview-view',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatDividerModule],
  templateUrl: './reports-overview-view.component.html',
  styleUrl: './reports-overview-view.component.scss'
})
export class ReportsOverviewViewComponent {

}
